export class Weather {
  constructor(data) {
    this.temp = data.temp
    this.icon = data.icon
    this.city = data.name
  }
}