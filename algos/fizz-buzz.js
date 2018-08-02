var fizzBuzz = function(n) {
  let result = [];
  for(let i = 1; i <= n; i++) {
      let temp = '';
      if(i % 3 === 0) {
          temp += 'Fizz';
      }
      if(i % 5 === 0) {
          temp += 'Buzz';
      }
      if(i % 3 === 0 && i % 5 === 0) {
          result.push(temp);
      }
      else {
          result.push(i.toString());
      }
  }
  return result;
};