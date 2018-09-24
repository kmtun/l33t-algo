const binarySearch = (array, value) => {
  let startingIndex = -1;
  let endingIndex = array.length;
  while(startingIndex + 1 < endingIndex) {
    let middle = startingIndex + Math.floor((endingIndex - startingIndex)/2);
    console.log(array[middle]);
    if(value === array[middle]) {
      return true;
    }
    if(value < array[middle]) {
      endingIndex = middle;
    }
    else if(value > array[middle]) {
      startingIndex = middle;
    }
    console.log(startingIndex, endingIndex)
  }
  return false;
}

binarySearch([1,2,3,4,48,100], 1);