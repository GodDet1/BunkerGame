import random from './random';

const createBunker = data => {
  const { bunker, maxBunkerSquare, minBunkerSquare, globalEvent } = data;

  const bunkerItems = [];
  for (let i = 0; i < 4; i++) {
    const item = bunker[random(bunker.length)];
    bunkerItems.push(item);
  }

  const bunkerSquare = random(maxBunkerSquare, minBunkerSquare);
  const event = globalEvent[random(globalEvent.length)];

  return {
    bunkerItems,
    bunkerSquare,
    event,
  };
};

export default createBunker;
