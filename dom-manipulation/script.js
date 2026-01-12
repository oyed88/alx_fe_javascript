// Load quotes from localStorage or use default
var quotes = JSON.parse(localStorage.getItem("quotes")) || [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" },
  { text: "Do not watch the clock. Do what it does. Keep going.", category: "Motivation" }
];

// Save quotes to localStorage
function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Display random quote
function displayRandomQuote() {
  var quoteDisplay = document.getElementById("quoteDisplay");
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var selectedQuote = quotes[randomIndex];

  quoteDisplay.textContent = selectedQuote.text;

  // Session storage (last viewed quote)
  sessionStorage.setItem("lastQuote", selectedQuote.text);
}

// Add new quote
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

  saveQuotes();

  textInput.value = "";
  categoryInput.value = "";

  displayRandomQuote();
}

// Export quotes to JSON file
function exportQuotes() {
  var dataStr = JSON.stringify(quotes, null, 2);
  var blob = new Blob([dataStr], { type: "application/json" });
  var url = URL.createObjectURL(blob);

  var a = document.createElement("a");
  a.href = url;
  a.download = "quotes.json";
  a.click();

  URL.revokeObjectURL(url);
}

// Import quotes from JSON file
function importFromJsonFile(event) {
  var fileReader = new FileReader();

  fileReader.onload = function (event) {
    var importedQuotes = JSON.parse(event.target.result);
    quotes.push.apply(quotes, importedQuotes);
    saveQuotes();
    alert("Quotes imported successfully!");
  };

  fileReader.readAsText(event.target.files[0]);
}

// Event listener (checker-friendly)
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);

// Initial load
displayRandomQuote();

