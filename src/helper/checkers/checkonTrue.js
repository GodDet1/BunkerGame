import random from 'helper/random';

export default function checkonTrue(dataArr, dataBaseItem) {
  const dataItems = {};

  dataArr.forEach(element => {
    if (dataItems[element]) {
      dataItems[element] += 1;
    } else {
      dataItems[element] = 1;
    }
  });

  const newData = recursionChangeData(dataItems, dataBaseItem, dataArr);

  return newData;
}

function recursionChangeData(data, dataBaseItem, dataArr) {
  const positive = data.true;
  const negative = data.false;
  const delta = (positive / negative) * 100;

  if (
    delta > 100 - dataBaseItem.percentageNegative &&
    delta < 100 + dataBaseItem.percentagePositive
  ) {
    return dataArr;
  }

  const newData = [];
  const length = positive + negative;

  for (let i = 0; i <= length; i++) {
    const item = dataBaseItem.gender[random(1)];
    newData.push(item);
  }

  return checkonTrue(newData, dataBaseItem);
}
