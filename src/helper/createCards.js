import checkData from './checkers/checkData';
import createCard from './createCard';

function createCards(data, playersCount) {
  const cards = [];

  for (let i = 0; i < playersCount; i++) {
    cards.push(createCard(data));
  }

  const checkedCards = checkData(cards, data);

  return checkedCards;
}

export default createCards;
