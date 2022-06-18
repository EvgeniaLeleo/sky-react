const isValidEmail = (string) => {
  return string.match(/^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i);
};

export default isValidEmail;
