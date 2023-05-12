const solution = (N, targets) => {
  const numbers = Array(N)
    .fill(1)
    .map((number, index) => number + index);

  let answer = 0;
  let start = 0;

  targets.forEach((target) => {
    const index = numbers.indexOf(target);
    const leftDistance = index > start ? start + (numbers.length - index) : start - index;
    const rightDistance = index < start ? numbers.length - start + index : index - start;

    answer += Math.min(leftDistance, rightDistance);
    numbers.splice(index, 1);
    start = index === numbers.length ? 0 : index;
  });

  return answer;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');
const [line, numbers] = lines;

console.log(solution(line.split(' ').map(Number)[0], numbers.split(' ').map(Number)));
