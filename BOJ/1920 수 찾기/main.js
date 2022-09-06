const solution = (A, numbers) => {
  const answer = [];
  const set = new Set(A);
  numbers.forEach((n) => answer.push(set.has(n) ? 1 : 0));
  console.log(answer.join('\n'));
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, numbers1, M, numbers2] = inputs;

solution(numbers1.split(' ').map(Number), numbers2.split(' ').map(Number));
