import { AppState } from "../AppState.js";
import { Image } from "../models/ImagesModel.js";
import { api } from "../utils/Axios.js";
import { logger } from "../utils/Logger.js";


class ImageService {
  async getImages() {
    const response = await api.get('api/images')
    console.log('GOT IMAGES', response.data);
    // FIXME you are not getting an array of images here, so you cannot use .map!!!
    // const myImages = response.data.map(pojo => new Image(pojo))
    // logger.log('Image', myImages)
    // AppState.images = myImages
  }
}

export const imageService = new ImageService()