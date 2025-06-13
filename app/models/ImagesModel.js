export class Image {
  constructor(data) {
    this.id = data.id
    this.collection = data.collection
    this.alt = data.altDescription
    this.imgUrl = data.originalUrl
  }
}