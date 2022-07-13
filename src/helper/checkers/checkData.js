import checkonTrue from './checkonTrue';

function checkData(cards, data) {
  const additionalInfoArr = [];
  const baggageInfoArr = [];
  const cardsInfoArr = [];
  const characterIArr = [];
  const childArr = [];
  const genderArr = [];
  const healthInfoArr = [];
  const hobbiesInfArr = [];
  const oldArr = [];
  const phobiaInfoArr = [];
  const proffesionArr = [];
  const weightInfoArr = [];

  cards.forEach(
    ({
      additionalInfo,
      baggageInfo,
      cardsInfo,
      characterI,
      child,
      gender,
      healthInfo,
      hobbiesInf,
      old,
      phobiaInfo,
      proffesion,
      weightInfo,
    }) => {
      additionalInfoArr.push(additionalInfo);
      baggageInfoArr.push(baggageInfo);
      cardsInfoArr.push(cardsInfo);
      characterIArr.push(characterI);
      childArr.push(child);
      genderArr.push(gender);
      healthInfoArr.push(healthInfo);
      hobbiesInfArr.push(hobbiesInf);
      oldArr.push(old);
      phobiaInfoArr.push(phobiaInfo);
      proffesionArr.push(proffesion);
      weightInfoArr.push(weightInfo);
    }
  );

  const newGenderData = checkonTrue(genderArr, data);
  const newChildData = checkonTrue(childArr, data);

  const newCards = [];
  for (let i = 0; i < cards.length; i++) {
    const newCard = { ...cards[i] };
    newCard.gender = newGenderData[i];
    newCard.child = newChildData[i];

    newCards.push(newCard);
  }

  return newCards;
}

export default checkData;
