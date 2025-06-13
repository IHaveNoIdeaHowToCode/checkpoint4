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
  }
}

export const todoService = new TodoService()