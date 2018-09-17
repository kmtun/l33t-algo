const reverseChars = (left, right) => {
  while (left < right) {
    [message[left], message[right]] = [message[right], message[left]];
    ++left;
    --right;
  }
}
const reverseWords = (message) => {
  reverseChars(0, message.length - 1);
  let currentStart = 0;
  for (let i = 0; i <= message.length; i++) {
    if (message[i] === ' ' || i === message.length) {
      reverseChars(currentStart, i - 1);
      currentStart = i + 1;
    }
  }
}

const message = ['c', 'a', 'k', 'e', ' ',
  'p', 'o', 'u', 'n', 'd', ' ',
  's', 't', 'e', 'a', 'l'];

// const message = ['h', 'a', 's', ' ', 'l', 'a', 'n', 'd', 'e', 'd'];
reverseWords(message);
console.log(message.join(''));