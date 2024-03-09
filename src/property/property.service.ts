import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { FilePayload } from './dto/file-upload';
import { CloudinaryService } from 'src/shared/cloudinary/cloudinary.service';

@Injectable()
export class PropertyService {
  constructor(private cloudinaryService: CloudinaryService) {}
  async create(files: FilePayload, data: CreatePropertyDto) {
    // console.log("files ====>" ,files);

    if (!files) {
      throw new BadRequestException('Please provide the property images');
    }

    //upload Images
    console.log('im about to save files');
    const images = await this.saveFiles(files);

    console.log('the response are ', images);
    return data;
  }

  async saveFiles(files: FilePayload) {
    const res = { mainImage: null, otherImages: [] };
    if (!files.mainImage) {
      throw new BadRequestException('Please upload the Main Image');
    }
    if (!files.otherImages) {
      throw new BadRequestException('Please upload the Other Images');
    }
    console.log('uploadingf first one');

    const mainImageRes = await this.cloudinaryService.uploadSingleImage(
      files?.mainImage[0],
      'MAIN_IMAGE'
    );
    console.log('done uploading first one');

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
