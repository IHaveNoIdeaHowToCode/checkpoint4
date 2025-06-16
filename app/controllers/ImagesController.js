import { AppState } from "../AppState.js"
import { Image } from "../models/ImagesModel.js";
import { imageService } from "../services/ImagesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js";


export class ImagesController {
  constructor() {
    console.log("IMAGES CONTROLLER IS HERE");
    // FIXME pass your draw function to the observer here, not your get function
    this.getRandomImage()
    AppState.on('images', this.drawImage)
  }


  async getRandomImage() {
    try {
      await imageService.getImages()
    } catch (error) {
      console.error('COULD NOT GET IMAGE', error);
      Pop.error(error, 'COULD NOT GET IMAGES', 'WOOPS')
    }
  }

  async drawImage() {
    const image = AppState.images
    // setHTML('active-img', Image.)
    document.body.style.backgroundImage = `url(${image.imgUrl.full})`
    // TODO reference Nasa lecture for when mick draws the NASA picture

  }

}