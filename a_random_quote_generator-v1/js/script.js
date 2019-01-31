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
  quotation: "Do or do not. There is no try.qqqqqqqqq qqqqqqq qdegre rthrth rhtrhtrthwr htsr htswrt hrwhtsw rhtwr htrwthwrhtwrthwrhtht",
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
  var currentQuote = getRandomQuote();
  var htmlString = '';
   htmlString = '<p class="quote">' + currentQuote.quotation + '</p>';
   htmlString += '<p class="source">' + ' ' + currentQuote.source;
   if(currentQuote.citation){
      htmlString += '<span class="citation">' + currentQuote.citation + '</span>';
    }
    if(currentQuote.year){
     htmlString += '<span class="year">' + currentQuote.year + '</span>';
   }
   htmlString += '</p>';

  document.getElementById("quote-box").innerHTML = htmlString;
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
