import { ImagesController } from "./controllers/ImagesController.js"
import { QuotesController } from "./controllers/QuotesController.js"
import { TodoController } from "./controllers/TodoController.js"
import { WeatherController } from "./controllers/WeatherController.js"
WeatherController



class App {

  todoController = new TodoController()
  quotesController = new QuotesController()
  imagesController = new ImagesController()
  weatherController = new WeatherController()

}

window['app'] = new App()


