function highestProductOf3(arrayOfInts) {

  // Calculate the highest product of three numbers
  if(!arrayOfInts.length || arrayOfInts.length <= 2) throw new Error('Invalid array');
  let min1 = Number.MAX_VALUE;
  let min2 = Number.MAX_VALUE;
  let max1 = Number.NEGATIVE_INFINITY;
  let max2 = Number.NEGATIVE_INFINITY;
  let max3 = Number.NEGATIVE_INFINITY;
  for(let i = 0; i < arrayOfInts.length; i++) {
    let current = arrayOfInts[i];
    if(current <= min1) {
      min2 = min1;
      min1 = current;
    }
    else if(current <= min2) {
      min2 = current;
    }
    if(current >= max1) {
      max3 = max2;
      max2 = max1;
      max1 = current;
    }
    else if(current >= max2) {
      max3 = max2;
      max2 = current;
    }
    else if(current >= max3) {
      max3 = current;
    }
  }
  console.log(min1, min2, max3, max2, max1);
  return Math.max(min1 * min2 * max1, max1 * max2 * max3);
}

const product = highestProductOf3([1,10,-5,1,-100]);
console.log(product);