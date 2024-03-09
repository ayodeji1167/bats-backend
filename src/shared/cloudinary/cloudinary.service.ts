/* eslint-disable no-undef */

import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 } from 'cloudinary';
import { IFile } from '../interface';
import { IBatsConfig } from 'src/configuration/interface';
import streamifier from 'streamifier';

@Injectable()
export class CloudinaryService {
  private config!: IBatsConfig;

  constructor(private configService: ConfigService) {
    this.config = configService.get('live') as IBatsConfig;
    v2.config({
      cloud_name: this.config.cloudinary.name,
      api_key: this.config.cloudinary.apiKey,
      api_secret: this.config.cloudinary.secret,
    });
  }

  async uploadImage(
    file: Express.Multer.File,
    section = 'IMAGE',
    resourceType: 'image' | 'video' | 'raw' | 'auto' = 'image'
  ) {
    return new Promise((resolve, reject) => {
      const uploadStream = v2.uploader.upload_stream(
        {
          folder: `BATS/${section}`,
          resource_type: resourceType,
        },
        (err, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(err);
          }
        }
      );
      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  }

  async uploadSingleImage(
    file: Express.Multer.File,
    section = 'IMAGE',
    resourceType: 'image' | 'video' | 'raw' | 'auto' = 'image'
  ): Promise<IFile> {
    let result;
    try {
      result = (await this.uploadImage(file, section, resourceType)) as any;
    } catch (err) {
      throw new BadRequestException(err);
    }
    return {
      url: result?.secure_url,
      publicId: result?.public_id,
    };
  }

  async uploadMultipleImages(
    files: Express.Multer.File[],
    section = 'IMAGE',
    resourceType: 'image' | 'video' | 'raw' | 'auto' = 'image'
  ) {
    const result = [];
    for (const file of files) {
      const res = await this.uploadSingleImage(file, section, resourceType);
      result.push(res);
    }
    return result;
  }
}
