const solution = (ropes) => {
  ropes.sort((a, b) => b - a);

  let answer = -1;

  for (let i = 0; i < ropes.length; i++) {
    answer = Math.max(ropes[i] * (i + 1), answer);
  }

  return answer;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...numbers] = inputs;

console.log(solution(numbers.map(Number)));
