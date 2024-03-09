import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { FilePayload } from './dto/file-upload';
import { CloudinaryService } from 'src/shared/cloudinary/cloudinary.service';
import { InjectModel } from '@nestjs/mongoose';
import { Property, PropertyDocument } from './entities/property.entity';
import { Model } from 'mongoose';
import { nanoid } from 'nanoid';

@Injectable()
export class PropertyService {
  constructor(
    private cloudinaryService: CloudinaryService,
    @InjectModel(Property.name) private eventModel: Model<PropertyDocument>
  ) {}

  async create(files: FilePayload, data: CreatePropertyDto) {
    // console.log("files ====>" ,files);

    if (!files) {
      throw new BadRequestException('Please provide the property images');
    }

    //upload Images
    const images = await this.saveFiles(files);

    console.log('nanoid is ', nanoid(6));
    const property = await this.eventModel.create({
      ...data,
      uniqueId: String(nanoid(6)).toUpperCase(),
      mainImage: images?.mainImage,
      otherImages: images?.otherImages,
    });

    return property;
  }

  async saveFiles(files: FilePayload) {
    const res = { mainImage: null, otherImages: [] };
    if (!files.mainImage) {
      throw new BadRequestException('Please upload the Main Image');
    }
    if (!files.otherImages) {
      throw new BadRequestException('Please upload the Other Images');
    }

    const mainImageRes = await this.cloudinaryService.uploadSingleImage(
      files?.mainImage[0],
      'MAIN_IMAGE'
    );

    const otherImagesRes = await this.cloudinaryService.uploadMultipleImages(
      files?.otherImages,
      'OTHER_IMAGES'
    );
    res.mainImage = mainImageRes;
    res.otherImages = otherImagesRes;
    return res;
  }

  findAll() {
    return `This action returns all property`;
  }

  findOne(id: number) {
    return `This action returns a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
