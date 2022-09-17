const getRandomNumber = function (min, max) {
  if (min < 0 || max < 0) {
    return 0;
  }
  const numbers = [min, max];
  if (min >= max) {
    min = numbers[1];
    max = numbers[0];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const checkLength = function (string, limit) {
  return string.length <= limit;
}
