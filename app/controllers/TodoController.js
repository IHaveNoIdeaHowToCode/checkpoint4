



import { AppState } from "../AppState.js"
import { todoService } from "../services/TodoService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class TodoController {
  constructor() {
    console.log("TODO CONTROLLER IS HERE")
    AppState.on('identity', this.getTodos)

  }

  async getTodos() {
    try {
      await todoService.getTodos()
    } catch (error) {
      Pop.error(error, 'Could not get Todos!')
      console.error('getTodos failed', error);
    }
  }
}