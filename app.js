const express = require('express');
const app = express();
const path = require('path');

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// Define the root route to serve the game page
app.get('/', (req, res) => {
  // Generate shuffled card pairs for the game
  const cards = generateCards();
  res.render('index', { cards });
});

// Listen on a specific port
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// Function to generate shuffled card pairs
function generateCards() {
  const symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'];
  const cards = [...symbols, ...symbols];  
  return shuffle(cards);
}

// Simple shuffle function for cards
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
