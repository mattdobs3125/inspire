import QuoteService from "./quote-service.js";

let qs = new QuoteService

function draw (quote){
	let template = ""
	for (let i in quote){
		template = `
		<div class="well">
		
		<h5>${quote.quote}BY:${quote.author}</h5>

		
		</div>
		
		
		
		`;
		document.getElementById("quote-s").innerHTML= template

	}
}
export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
		qs.getQuote(function (quote) {
			console.log('What is the quote', quote.quote);
			draw(quote);
		})
	}
}
