const cards = document.querySelectorAll('.card');
let flippedCards = [];
let matchedCards = [];

cards.forEach(card => {
  card.addEventListener('click', () => {
    if (flippedCards.length < 2 && !card.classList.contains('flip') && !matchedCards.includes(card)) {
      card.classList.add('flip');
      flippedCards.push(card);
      
      if (flippedCards.length === 2) {
        checkMatch();
      }
    }
  });
});

function checkMatch() {
  const [card1, card2] = flippedCards;
  if (card1.dataset.card === card2.dataset.card) {
    matchedCards.push(card1, card2);
    flippedCards = [];
    if (matchedCards.length === cards.length) {
      setTimeout(() => alert('Congratulations! You won the game!'), 500);
    }
  } else {
    setTimeout(() => {
      card1.classList.remove('flip');
      card2.classList.remove('flip');
      flippedCards = [];
    }, 1000);
  }
}

document.getElementById('resetBtn').addEventListener('click', resetGame);

function resetGame() {
  matchedCards = [];
  flippedCards = [];
  cards.forEach(card => card.classList.remove('flip'));
  shuffleCards();
}

function shuffleCards() {
  const shuffledCards = Array.from(cards);
  shuffledCards.forEach(card => {
    const randomPos = Math.floor(Math.random() * shuffledCards.length);
    card.style.order = randomPos;
  });
}
