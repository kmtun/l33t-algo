var fizzBuzz = function(n) {
  let result = [];
  for(let i = 1; i <= n; i++) {
      if(!(i % 3) && !(i % 5)) {
          result.push('FizzBuzz');
      }
      else if(!(i % 3)) {
          result.push('Fizz');
      }
      else if(!(i % 5)) {
          result.push('Buzz');
      }
      else {
          result.push(i.toString());
      }
  }
  return result;
};