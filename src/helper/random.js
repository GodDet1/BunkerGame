export default function random(endCount, min) {
  if (min) {
    return min + Math.round(Math.random() * (endCount - min));
  }
  return Math.round(Math.random() * endCount);
}
