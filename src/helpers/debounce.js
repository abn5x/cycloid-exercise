// Code is taken from https://www.freecodecamp.org/news/javascript-debounce-example/
// Credit to Ondrej Polesny

export default function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
