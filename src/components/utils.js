const createArray = (n) => {
  const arr = [];

  for (let i = 0; i < n; i += 1) {
    arr.push(i);
  }

  return arr;
};

const randomIntegerHex = () => {
  return Math.floor(Math.random() * 16).toString(16);
};

const generateColorHex = () => {
  let hexColor = '';

  for (let i = 1; i <= 6; i++) {
    hexColor += randomIntegerHex();
  }

  return '#' + hexColor;
};

const isValidEmail = (email) => {
  return email.match(/^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i);
};

export { generateColorHex, createArray, isValidEmail };
