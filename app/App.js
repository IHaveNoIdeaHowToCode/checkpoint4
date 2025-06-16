import { AuthController } from "./Auth/AuthController.js"
import { ImagesController } from "./controllers/ImagesController.js"
import { QuotesController } from "./controllers/QuotesController.js"
import { TodoController } from "./controllers/TodoController.js"
import { WeatherController } from "./controllers/WeatherController.js"




class App {
  authController = new AuthController()
  todoController = new TodoController()
  quotesController = new QuotesController()
  imagesController = new ImagesController()
  weatherController = new WeatherController()

  // setInterval(function() {
  //   const now = new Date();
  //   const hours = now.getHours()
  //   const minutes = now.getMinutes().toString()
  //   document.getElementById('clock').innerText = `${hours}:${minutes}`
  // }, 1000)
}

setInterval(function () {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0')
  // console.log(document.getElementById('clock'))
  document.getElementById('clock').innerText = `${hours}:${minutes}`;
}, 1000);

window['app'] = new App()


