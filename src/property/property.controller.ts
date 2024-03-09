import {
  Controller,
  Get,
  Param,
  Delete,
  Body,
  Post,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { imageOptions } from 'src/shared/multer';
import { FilePayload } from './dto/file-upload';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'mainImage', maxCount: 1 },
        { name: 'otherImages', maxCount: 4 },
      ],

      imageOptions
    )
  )
  @Post()
  create(
    @UploadedFiles() files: FilePayload,
    @Body() createPropertyDto: CreatePropertyDto
  ) {
    return this.propertyService.create(files, createPropertyDto);
  }

  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyService.findOne(+id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updatePropertyDto: UpdatePropertyDto
  // ) {
  //   return this.propertyService.update(+id, updatePropertyDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertyService.remove(+id);
  }
}
