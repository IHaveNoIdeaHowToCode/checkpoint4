import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";

export class WeatherController {
  constructor() {
    console.log("WEATHER CONTROLLER IS HERE");
    this.getWeather()
  }

  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      Pop.error(error, 'Could not get Weather!')
      console.error('getWeather failed', error)
    }
  }
}