import { AppState } from "../AppState.js";
import { Weather } from "../models/WeatherModel.js";
import { api } from "../utils/Axios.js";
import { logger } from "../utils/Logger.js";


class WeatherService {
  async getWeather() {
    const response = await api.get('api/weather')
    console.log('GOT WEATHER', response.data);
  }
}

export const weatherService = new WeatherService