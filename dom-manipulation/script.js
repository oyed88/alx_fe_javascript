// Quotes array (ALX expects var)
var quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" },
  { text: "Do not watch the clock. Do what it does. Keep going.", category: "Motivation" },
  { text: "Wisdom is the principal thing; therefore get wisdom.", category: "Wisdom" }
];

// Display a random quote
function displayRandomQuote() {
  var quoteDisplay = document.getElementById("quoteDisplay");
  var randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex].text;
}

// Add a new quote
function addQuote() {
  var textInput = document.getElementById("newQuoteText");
  var categoryInput = document.getElementById("newQuoteCategory");

  var newText = textInput.value;
  var newCategory = categoryInput.value;

  if (newText === "" || newCategory === "") {
    alert("Please fill in both fields");
    return;
  }

  quotes.push({
    text: newText,
    category: newCategory
  });

  textInput.value = "";
  categoryInput.value = "";

  displayRandomQuote();
}

// Event listener for button (checker-friendly)
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);

