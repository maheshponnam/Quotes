const quotes =[
{
	name: 'Stephen King',
	quote: 'Get busy living or get busy dying.'
},

{
	name:'John F.Kennedy',
	quote: 'Those who date to fail miserbly can achieve greatly.'
},
{
	name: 'Abraham Lincoln',
	quote: 'It had lomg since come to my attention that people of accomplishment rarely sat back and le things happen to them.'
},

{
	name: 'Leo Tolstory',
	quote: 'If you want to be happy,be.'
}
	
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

  quoteBtn.addEventListener('click',displayQuote);
  
function displayQuote(){
	
	let number = Math.floor(Math.random()*quotes.length);
quoteAuthor.innerHTML = quotes[number].name;	
quote.innerHTML = quotes[number].quote;
}





























//const simpleQuotes=[

//{
//	name: 'author number 1',
	//quote: 'quote number 1'
//},

//{
	//name: 'author number 2',
	//quote: 'quote number 2'
//},

//{
	//name: 'author number 3',
	//quote: 'quote number 3'
//},

//{
	//name: 'author number 4',
	//quote: 'quote number 4'
//}

//]






































