import { AppState } from "../AppState.js"
import { imageService } from "../services/ImagesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"


export class ImagesController {
  constructor() {
    console.log("IMAGES CONTROLLER IS HERE");
    AppState.on('images', this.getRandomImage)
    this.getRandomImage()
  }


  async getRandomImage() {
    try {
      await imageService.getImages()
      const randomIndex = Math.floor(Math.random() * images.length)
      const randomImage = images[randomIndex]
      console.log(randomImage);
    } catch (error) {
      console.error('COULD NOT GET IMAGE', error);
      Pop.error(error, 'COULD NOT GET IMAGES', 'WOOPS')
    }
  }

}