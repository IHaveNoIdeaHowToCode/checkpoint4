export class ToDo {
  constructor(data) {
    this.isCompleted = data.completed
    this.description = data.description
    this.creatorId = data.creatorId
    this.id = data.id
  }
}

// MAKE LIST OF TODOS OFFCANVAS, DONE IN APOD

