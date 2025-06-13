import { Identity } from './Auth/Identity.js'
import { Image } from './models/ImagesModel.js'
import { Quotes } from './models/QuotesModel.js'
import { ToDo } from './models/TodoModel.js'
import { Weather } from './models/WeatherModel.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'


class ObservableAppState extends EventEmitter {


  /**@type {Identity} */
  identity = null

  /**@type {ToDo} */
  todo = null

  /**@type {Quotes} */
  quotes = null

  /**@type {Image} */
  images = null

  /**@type {Weather} */
  weather = null



}

export const AppState = createObservableProxy(new ObservableAppState())