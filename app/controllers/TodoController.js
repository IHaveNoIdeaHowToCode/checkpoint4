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
    AppState.on('todos', this.drawIncompleteTodos)
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

  drawIncompleteTodos() {
    const todos = AppState.todos
    const incompleteTodos = todos.filter(todo => !todo.isCompleted)
    console.log("INCOMPLETE TODOS", incompleteTodos.length);
    let count = incompleteTodos.length
    const countElem = document.getElementById('todo-count')
    countElem.innerText = `To Do: ${count}`
  }

  async submitTodo() {
    try {
      event.preventDefault()
      const formElem = event.target
      const todoFormData = getFormData(formElem)
      console.log('Submitted Todo DATA', todoFormData);
      await todoService.createTodo(todoFormData)
    } catch (error) {
      Pop.error(error, 'ERROR', 'Failed to create new Todo')
      console.error('submitTodo failed', error)
    }
  }

  async confirmDeleteTodo(todoID) {
    const confirmed = await Pop.confirm('Are you sure you want to delete this Todo?')

    if (!confirmed) { return }

    try {
      await todoService.deleteTodo(todoID)
    } catch (error) {
      Pop.error(error, 'ERROR', 'could not delete Todo!')
      console.error('deleteTodo failed', error);
    }
  }
}