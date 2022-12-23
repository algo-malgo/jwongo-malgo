const solution = (nArr, mArr) => {
  const map = new Map();
  nArr.forEach((el) => {
    map.set(el, map.get(el) + 1 || 1);
  });
  const answer = [];
  mArr.forEach((el) => {
    answer.push(map.get(el) ?? 0);
  });
  return answer.join(' ');
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, numbers, T, cases] = inputs;

console.log(
  solution(numbers.split(' ').map(Number), cases.split(' ').map(Number))
);
