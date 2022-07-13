import random from './random';

const createCard = data => {
  const {
    proffesions,
    additional,
    baggage,
    cards,
    character,
    health,
    hobbies,
    phobia,
    minAge,
    maxAge,
    haveChild,
    weight,
  } = data;

  const proffesion = proffesions[random(proffesions.length)];
  const additionalInfo = additional[random(additional.length)];
  const baggageInfo = baggage[random(baggage.length)];
  const characterInfo = character[random(character.length)];
  const healthInfo = health[random(health.length)];
  const hobbiesInfo = hobbies[random(hobbies.length)];
  const phobiaInfo = phobia[random(phobia.length)];
  const weightInfo = weight[random(weight.length)];

  const cardsInfo = [];
  for (let i = 0; i < 2; i++) {
    const item = cards[random(cards.length)];
    cardsInfo.push(item);
  }

  return {
    proffesion,
    old: random(maxAge, minAge),
    child: haveChild[random(1)],
    gender: haveChild[random(1)],
    healthInfo,
    weightInfo,
    phobiaInfo,
    characterInfo,
    additionalInfo,
    hobbiesInfo,
    baggageInfo,
    cardsInfo,
  };
};

export default createCard;
