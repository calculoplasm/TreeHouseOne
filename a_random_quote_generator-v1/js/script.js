/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/


var quotes = [
{
  quotation: "Do or do not. There is no try.",
  source: "Yoda",
  citation: "Star Wars: The Empire Strikes Back",
  year: "1980",
  tag: "Movies"
},

{
  quotation: "These aren't the droids you're looking for.",
  source: "Obi-Wan Kenobi",
  citation: "Star Wars: A New Hope",
  year: "1977",
  tag: "Movies"
},

{
  quotation: "I find your lack of faith disturbing.",
  source: "Darth Vader",
  citation: "Star Wars: A New Hope",
  year: "1977",
  tag: "Movies"
},

{
  quotation: "I'd just as soon kiss a wookie.",
  source: "Princess Leia",
  citation: "Star Wars: A New Hope",
  year: "1977",
  tag: "Movies"
},

{
  quotation: "I take orders from just one person: me.",
  source: "Han Solo",
  citation: "Star Wars: A New Hope",
  year: "1977",
  tag: "Movies"
},

{
  quotation: "Be yourself: everyone else is already taken.",
  source: "Oscar Wilde",
  citation: "",
  year: "",
  tag: "Authors"
},

{
  quotation: "Remember that sometimes not getting what you want is a wonderful stroke of luck.",
  source: "Dalai Lama",
  citation: "",
  year: "",
  tag: "Spiritual Leaders"
},{
  quotation: "Science is a way of thinking much more than it is a body of knowledge.",
  source: "Carl Sagan",
  citation: "",
  year: "",
  tag: "Science"
},{
  quotation: "We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.",
  source: "Carl Sagan",
  citation: "",
  year: "",
  tag: "Science"
},{
  quotation: "Computer science is no more about computers than astronomy is about telescopes.",
  source: "Edsger Dijkstra",
  citation: "",
  year: "",
  tag: "Science"
}

];

/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/
/*
random integer within ranges function (pulled from getRandomQuote function and
made it more versatile in case I want to use more randomly generated integers)
also used in getRandomColor()
*/
function rangedRandomInteger (lowerLimit, upperLimit){
  var min = Math.ceil(lowerLimit);
  var max = Math.floor(upperLimit);
  var result =  Math.floor(Math.random() * (max-min))+min;
  console.log(result);
  return result;
}


// returns a random object from quotes array
function getRandomQuote(){
  return quotes[rangedRandomInteger(0,quotes.length)];
}

// returns a random rgb value
function getRandomColor(){
  var r = rangedRandomInteger(0,256);
  var g = rangedRandomInteger(0,256);
  var b = rangedRandomInteger(0,256);

  var color = 'rgb(' +  r + ', ' + g + ', ' + b + ')';
  return color;
}

////////////setinterval(printQuote,30000);
/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/



function printQuote() {
//get a random element of quotes object array
  var currentQuote = getRandomQuote();
//clear the string
  var htmlString = '';
//concatenate the quote and source
   htmlString = '<p class="quote">' + currentQuote.quotation + '</p>';
   htmlString += '<p class="source">' + ' ' + currentQuote.source;
//concatenate citation and/or year if attribute is present
   if(currentQuote.citation){
      htmlString += '<span class="citation">' + currentQuote.citation + '</span>';
    }
    if(currentQuote.year){
     htmlString += '<span class="year">' + currentQuote.year + '</span>';
   }
   if(currentQuote.tag){
     htmlString += '<span class="year">' + currentQuote.tag + '</span>';
   }
//add closing p tag
   htmlString += '</p>';
//prints quote and source, and citation and year if applicable to html page
  document.getElementById("quote-box").innerHTML = htmlString;
//changes the background color to a random rgb value (button stays green unless hovered over)
  document.getElementById("body").style.background = getRandomColor();
}

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
