let longestCommonPrefix = function (strs) {
  let result = '';
  strs.sort((a,b) => {
    return a.length - b.length;
  })
  let shortest = strs[0];
  let shortLen = shortest && shortest.length;
  for(let i = 0; i < shortLen; i++) {
    let current = shortest[i];
    for(let j = 1; j < strs.length; j++) {
      if(current != strs[j][i]) {
        return result;
      }
    }
    result += current;
  }
  return result;
};
let arr = ['flower', 'flow', 'flight'];
longestCommonPrefix(arr);