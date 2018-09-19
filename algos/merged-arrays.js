const mergeArrays = (arrOne, arrTwo) => {
  // initalize variables we need
  let currentIndex = 0;
  let currentOneIndex = 0;
  let currentTwoIndex = 0;
  let merged = [];
  // while there are still elements to process
  while (currentIndex < (arrOne.length + arrTwo.length)) {
    // case 1 if our current Index is bigger than arrOne, insert arrTwo
    if (currentOneIndex >= arrOne.length) {
      merged[currentIndex] = arrTwo[currentTwoIndex];
      ++currentTwoIndex;
    }
    // case 2 if our current Index is bigger than arrTwo, insert arrOne
    else if (currentTwoIndex >= arrTwo.length) {
      merged[currentIndex] = arrOne[currentOneIndex];
      ++currentOneIndex;
    }
    // case 3 if arrOne is smaller than arrTwo
    else if (arrOne[currentOneIndex] < arrTwo[currentTwoIndex]) {
      merged[currentIndex] = arrOne[currentOneIndex]
      ++currentOneIndex;
    }
      // case 4 if arrTwo is smaller than arrOne
    else if (arrTwo[currentTwoIndex] < arrOne[currentOneIndex]) {
      merged[currentIndex] = arrTwo[currentTwoIndex];
      ++currentTwoIndex;
    }
    ++currentIndex;
  }
  // return result
  return merged;
}

var myArray = [3, 4, 6, 10, 11, 15, 28];
var alicesArray = [1, 5, 8, 12, 14, 19, 20, 21, 22];

console.log(mergeArrays(myArray, alicesArray));