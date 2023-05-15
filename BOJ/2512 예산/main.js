const solution = (requests, budget) => {
  let start = 0;
  let end = budget;
  let middle = Math.floor((start + end) / 2);
  let max = middle;

  while (start <= end) {
    const sum = requests.map((request) => (request < middle ? request : middle)).reduce((acc, curr) => acc + curr, 0);
    if (middle <= budget && sum <= budget) {
      start = middle + 1;
      max = middle;
      middle = Math.floor((start + end) / 2);
    } else {
      end = middle - 1;
      middle = start + Math.floor((end - start) / 2);
    }
  }

  return Math.max(...requests.map((request) => (request < max ? request : max)));
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, numbers, M] = inputs;

console.log(solution(numbers.split(' ').map(Number), +M));
