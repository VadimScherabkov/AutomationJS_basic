

export const generateRandomFloatArray = ((length, min, max) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(parseFloat((Math.random() * (max - min) + min).toFixed(1)));
  }
  return arr;
});
