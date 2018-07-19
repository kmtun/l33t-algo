// /**
//  * @param {string} s
//  * @return {number}
//  */

let lengthOfLongestSubstring = function(s) {
  let max = 0, unq = new Set();
  let len = s.length, left = 0, right = 0, i = 0;
  while(left < len && right < len) {
    if(!unq.has(s[right])) {
      unq.add(s[right++])
      if(max < Math.max(right - left)) {
        max = Math.max(right - left);
      }
    }
    else {
      unq.delete(s[left++]);
    }
    ++i;
  }
  return max;
};

// lengthOfLongestSubstring('abcabcbb'); //3
lengthOfLongestSubstring('pwwkew');