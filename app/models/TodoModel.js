export class ToDo {
  constructor(data) {
    this.isCompleted = data.completed
    this.description = data.description
    this.creatorId = data.creatorId
    this.id = data.id
  }
  get todoHTMLTemplate() {
    return `
<div class="d-flex gap-3 align-items-center">
            <input onchange="app.todoController.toggleTodoComplete('${this.id}')" type="checkbox" class="form-check-input" ${this.isCompleted ? 'checked' : ''}>
            <p class="mb-0 flex-grow-1">${this.description}</p>
            <button class="btn btn-danger btn-sm mb-2" onclick="app.todoController.confirmDeleteTodo('${this.id}')">Delete</button>
    </div>
          </div>
`
  }
}

// MAKE LIST OF TODOS OFFCANVAS, DONE IN APOD
