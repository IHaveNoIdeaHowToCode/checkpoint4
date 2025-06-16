import { AppState } from "../AppState.js";
import { ToDo } from "../models/TodoModel.js";
import { api } from "../utils/Axios.js";
import { logger } from "../utils/Logger.js";


class TodoService {
  async getTodos() {
    const response = await api.get('api/todos')
    console.log('GOT TODOS', response.data);
    const myTodos = response.data.map(pojo => new ToDo(pojo))
    logger.log('ToDo', myTodos)
    AppState.todos = myTodos
  }

  async createTodo(todoFormData) {
    const response = await api.post('api/todos', todoFormData)
    console.log('Create new TODO WOOOO', response.data);
    const newTodo = new ToDo(response.data)
    AppState.todos.push(newTodo)
  }

  async checkTodo(todoID) {
    const todos = AppState.todos
    const todoIndex = todos.findIndex(todo => todo.id == todoID)
    const todoToCheck = todos[todoIndex]
    const todoState = { completed: !todoToCheck.isCompleted }
    const response = await api.put(`api/todos/${todoID}`, todoState)
    console.log('UPDATE TODO', response.data);
    const updatedTodo = new ToDo(response.data)
    console.log('UPDATED TODO', updatedTodo);
    todos.splice(todoIndex, 1, updatedTodo)
  }

  async deleteTodo(todoID) {
    const response = api.delete(`api/todos/${todoID}`)
    console.log('Delete TODO', response.data);
    const todos = AppState.todos
    const todoIndex = todos.findIndex(todo => todo.id == todoID)
    todos.splice(todoIndex, 1)
  }
}
export const todoService = new TodoService()