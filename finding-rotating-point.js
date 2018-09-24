function findRotationPoint(words) {
  // Find the rotation point in the vector
  let firstWord = words[0];
  let startingIndex = -1;
  let endingIndex = words.length;
  // if startingIndex is next to endingIndex, that mean ending Index is where we started
  while(startingIndex + 1 < endingIndex) {
    let middle = Math.floor(startingIndex + ((endingIndex - startingIndex) / 2));
    if(words[middle] >= firstWord) {
      startingIndex = middle;
    }
    else if(words[middle] <= firstWord) {
      endingIndex = middle;
    }
  }
  return endingIndex;
}

// Tests

let desc = 'small array';
let actual = findRotationPoint(['cape', 'cake']);
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'medium array';
actual = findRotationPoint(['grape', 'orange', 'plum', 'radish', 'apple']);
expected = 4;
assertEquals(actual, expected, desc);

desc = 'large array';
actual = findRotationPoint(['ptolemaic', 'retrograde', 'supplant',
  'undulate', 'xenoepist', 'asymptote',
  'babka', 'banoffee', 'engender',
  'karpatka', 'othellolagkage']);
expected = 5;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}