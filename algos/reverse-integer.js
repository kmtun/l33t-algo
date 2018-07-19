let reverse = function(x) {
  let neg = false;
  let res = 0;
  let overflowMAX = 2147483648/10;
  let overflowMIN = -2147483648/10;
  if(x < 0) {
    neg = true;
    x = Math.abs(x);
  }
  while(x) {
    let mod = Math.floor(x % 10);
    if(res > overflowMAX || (res === overflowMAX && mod > 7)) return 0;
    if(res < overflowMIN || (res === overflowMIN && mod < -8)) return 0;
    res = (res * 10) + mod;
    x = Math.floor(x / 10);
  }
  if(neg) res = 0 - res;
  return res;
};

reverse(123);