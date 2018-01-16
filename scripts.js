
//Create variable for New Quote
const newQuoteButton = document.querySelector('.new-quote');

//Random quotes resources API
const endpoint = 'https://talaikis.com/api/quotes/random/';

function getQuote(){
	//FETCH resources
	const result = [];
	fetch(endpoint)
		//THEN converts data into JSON
		.then(function (response) {
			return response.json();
		})
		//THEN use data filtered by Quote and Author and display on the selectors and save them to variables
		.then(function (data) {
			$('.quote-content').html(data.quote) && $('.quote-author').html(data.author) && result.push();
			q = data.quote;
			a = data.author;
		})
		//Add variables share button
		.then(function (r){
			$('.twitter-share-button').attr(
			'href', 'https://twitter.com/intent/tweet?text=' + '"' + q + '" ' + a);
		})
	}

//Event listener
newQuoteButton.addEventListener('click',getQuote);

//On page load generate a new quote
$(document).ready(function($) {
	$('.new-quote').click();
});




