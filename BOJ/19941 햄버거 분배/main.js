const solution = (K, table) => {
  const hamburgers = [];
  const people = [];
  let hamburgerIndex = 0;
  let personIndex = 0;
  let count = 0;
  table.forEach((el, index) => {
    if (el === 'H') {
      hamburgers.push(index);
    } else {
      people.push(index);
    }
    if (index - hamburgers[hamburgerIndex] > K) {
      hamburgerIndex++;
    }
    if (index - people[personIndex] > K) {
      personIndex++;
    }
    if (Math.abs(hamburgers[hamburgerIndex] - people[personIndex]) <= K) {
      count++;
      hamburgerIndex++;
      personIndex++;
    }
  });
  return count;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');
const [line, string] = lines;

console.log(solution(line.split(' ').map(Number)[1], string.split('')));
