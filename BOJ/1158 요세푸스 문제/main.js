const solution = (N, K) => {
  const queue = Array(N)
    .fill()
    .map((_, i) => i + 1);
  let count = 1;
  const answer = [];
  while (queue.length) {
    const front = queue.shift();
    if (count === K) {
      answer.push(front);
      count = 0;
    } else {
      queue.push(front);
    }
    count++;
  }
  return `<${answer.join(', ')}>`;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [M, N] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map((c) => +c);

console.log(solution(M, N));
