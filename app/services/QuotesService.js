import { AppState } from "../AppState.js";
import { Quote } from "../models/QuotesModel.js";
import { api } from "../utils/Axios.js";
import { logger } from "../utils/Logger.js";


class QuoteService {
  async getQuotes() {
    const response = await api.get('api/quotes')
    console.log('GOT QUOTES', response.data);
    const quote = new Quote(response.data);
    AppState.quotes = quote
  }
}

export const quoteService = new QuoteService()