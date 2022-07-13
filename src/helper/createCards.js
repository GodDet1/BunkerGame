import checkData from './checkers/checkData';
import createCard from './createCard';

function createCards(data, playersCount) {
  const cards = [];

  for (let i = 0; i < playersCount; i++) {
    cards.push(createCard(data));
  }

  checkData(cards, data);

  return cards;
}

export default createCards;
