import { AppState } from "../AppState.js";
import { ToDo } from "../models/TodoModel.js";
import { api } from "../utils/Axios.js";
import { logger } from "../utils/Logger.js";
import { saveState, loadState } from "../utils/Store.js";


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

  async deleteTodo(todoID) {
    const response = api.delete(`api/todos/${todoID}`)
    console.log('Delete TODO', response.data);
    const todos = AppState.todos
    const todoIndex = todos.findIndex(todo => todo.id == todoID)
    todos.splice(todoIndex, 1)
  }
}
export const todoService = new TodoService()