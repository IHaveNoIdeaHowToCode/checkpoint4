export class Image {
  constructor(data) {
    // FIXME make sure you look through the response data and save the correct properties here
    this.id = data.id
    this.collection = data.collection
    this.alt = data.altDescription
    this.imgUrl = data.originalUrl
  }
}