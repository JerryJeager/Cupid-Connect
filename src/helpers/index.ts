export const getRandomRange = () => {
  let max = 100;
  let min = -100;
  let difference = max - min;
  // generate random number
  let rand = Math.random();

  // multiply with difference
  rand = Math.floor(rand * difference);

  // add with min value
  rand = rand + min;
  
  return rand

//   console.log(rand);
};
