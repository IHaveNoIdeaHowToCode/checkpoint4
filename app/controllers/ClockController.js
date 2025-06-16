export class ClockController {
  constructor() {
    this.getClock()
  }

  getClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString();
    setInterval(this.getClock, 1000)
  }
}
