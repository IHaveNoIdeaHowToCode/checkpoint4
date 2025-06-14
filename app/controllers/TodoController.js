



import { AppState } from "../AppState.js"
import { todoService } from "../services/TodoService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class TodoController {
  constructor() {
    console.log("TODO CONTROLLER IS HERE")
    AppState.on('identity', this.getTodos)
    AppState.on('todos', this.drawTodosList)
  }

  async getTodos() {
    try {
      await todoService.getTodos()
    } catch (error) {
      Pop.error(error, 'Could not get Todos!')
      console.error('getTodos failed', error);
    }
  }

  drawTodosList() {
    const todos = AppState.todos
    let todosContent = ''
    todos.forEach(todo => todosContent += todo.todoHTMLTemplate)
    const todoElem = document.getElementById('todo-body')
    todoElem.innerHTML = todosContent
  }
}