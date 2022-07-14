import random from 'helper/random';

export default function checkYear(year, data) {
  const yearSum = year.reduce((acc, year) => acc + year, 0);
  const midYear = yearSum / year.length;

  if (midYear > data.minAverageAge && midYear < data.maxAverageAge) {
    return year;
  }

  const newYearArr = [];

  for (let i = 0; i < year.length; i++) {
    const item = random(data.maxAge, data.minAge);
    newYearArr.push(item);
  }

  return checkYear(newYearArr, data);
}
