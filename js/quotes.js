const quotes = [
  {
    quote: "Just Do it.",
    author: "NIKE",
  },
  {
    quote:
      "The moment of victory is much too short to live for that and nothing else.",
    author: "Martina Navratilova",
  },
  {
    quote:
      "Success is often achieved by those who don't know that failure is inevitable.",
    author: "Gabriel Coco Chanel",
  },
  {
    quote: "Happiness gives us the energy which is the basis of health.",
    author: "Henri-Frederic Amiel",
  },
  {
    quote: "Kites rise highest against the wind - not with it.",
    author: "Sir Winston Churchill",
  },
  {
    quote: "No great man ever complains of want of opportunity.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "Humanity can be quite cold to those whose eyes see the world differently.",
    author: "Eric A. Burns",
  },
  {
    quote:
      "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
    author: "Thomas A. Edison",
  },
  {
    quote: "To follow, without halt, one aim: There's the secret of success.",
    author: "Anna Pavlova",
  },
  {
    quote: "In the field of observation, chance favors only the prepared mind.",
    author: "Louis Pasteur",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todayQuote.quote}"`;
author.innerText = `-${todayQuote.author}`;
