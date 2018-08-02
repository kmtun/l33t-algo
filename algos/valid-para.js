var isValid = function(s, left = ['(', '[', '{'], right = [')', ']', '}']) {
  let stack = [];
  if(!s.length) {
    return true;
  }
  if(s.length === 1) {
    return false;
  }
  for(let i = 0, len = s.length; i < len; i++) {
    if(left.includes(s[i])) {
      stack.push(s[i]);
    }
    else if(s[i] === ')') {
      if(stack.pop() != '(') return false;
    }
    else if(s[i] === ']') {
      if(stack.pop() != '[') return false;
    }
    else if(s[i] === '}') {
      if(stack.pop() != '{') return false;
    }
  }
  if(stack.length) return false;
  return true;
};