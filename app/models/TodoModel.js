export class ToDo {
  constructor(data) {
    this.isCompleted = data.completed
    this.description = data.description
    this.creatorId = data.creatorId
    this.id = data.id
  }
  get todoHTMLTemplate() {
    return `
<div class="d-flex gap-3">
            <input type="checkbox" class="form-check-input" ${this.isCompleted ? 'checked' : ''}>
            <p>${this.description}</p>
          </div>
`
  }
}

// MAKE LIST OF TODOS OFFCANVAS, DONE IN APOD
