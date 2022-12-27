const solution = (N, K, A) => {
  let answer = 0;
  A.reverse().forEach((coin) => {
    if (K >= coin) {
      answer += Math.floor(K / coin);
      K = K % coin;
    }
  });
  return answer;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');
const [line, ...numbers] = lines;

console.log(
  solution(
    ...line.split(' ').map(Number),
    numbers.map((s) => s.split(' ').map(Number))
  )
);
