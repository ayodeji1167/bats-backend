/* eslint-disable no-undef */

export interface FilePayload {
  mainImage?: Express.Multer.File;
  otherImages?: Express.Multer.File[];
}
