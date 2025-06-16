import { AppState } from "../AppState.js"
import { imageService } from "../services/ImagesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"


export class ImagesController {
  constructor() {
    console.log("IMAGES CONTROLLER IS HERE");
    // FIXME pass your draw function to the observer here, not your get function
    // AppState.on('images', this.getRandomImage)
    this.getRandomImage()
  }


  async getRandomImage() {
    try {
      await imageService.getImages()
    } catch (error) {
      console.error('COULD NOT GET IMAGE', error);
      Pop.error(error, 'COULD NOT GET IMAGES', 'WOOPS')
    }
  }

  // TODO reference Nasa lecture for when mick draws the NASA picture

}