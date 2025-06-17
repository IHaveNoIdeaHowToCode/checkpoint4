import { AppState } from "../AppState.js";
import { quoteService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
Pop

export class QuotesController {
  constructor() {
    console.log("QUOTES CONTROLLER IS HERE");
    this.getQuotes()
    AppState.on('quotes', this.drawQuote)
  }

  async getQuotes() {
    try {
      console.log('going to get quote')
      await quoteService.getQuotes()
    } catch (error) {
      Pop.error(error, 'could not get Quotes!');
      console.error('getWeather failed', error)
    }
  }

  drawQuote() {
    console.log('pencil drawing quote');

    const quotes = AppState.quotes
    setHTML('quote', quotes.quoteTemplate)
  }
}