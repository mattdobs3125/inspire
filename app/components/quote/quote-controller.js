
let qs = new QuoteService()


export default class QuoteController {


	getQuote() {
		qs.getQuote(function (quote) {
			console.log('What is the quote', quote)
		})
	}
}
