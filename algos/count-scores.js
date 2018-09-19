const sortScores = (unsorted, highest) => {
  const scoreCounts = [];
  for(let i = 0; i <= highest; i++) {
    scoreCounts.push(0);
  }
  unsorted.forEach(value => {
    scoreCounts[value] += 1;
  });
  
  const sortedScores = [];
  
  for(let score = highest; score >= 0; score--) {
    const count = scoreCounts[score];
    for(let time = 0; time < count; time++) {
      sortedScores.push(count);
    }
  }
  return sortedScores;
  
}

// run your function through some test cases here
// remember: debugging is half the battle!
var unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

console.log(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE));
