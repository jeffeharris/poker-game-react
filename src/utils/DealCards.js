const DealCards = (deck, player) => {
  // Assuming deck is an array of cards and player is an object with a hand property
  if (deck.length < 5) {
    throw new Error("Not enough cards in the deck");
  }

  for (let i = 0; i < 5; i++) {
    const card = deck.pop();
    player.hand.push(card);
  }
};

export default DealCards;