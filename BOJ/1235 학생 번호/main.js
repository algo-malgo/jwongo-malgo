const solution = (numbers) => {
  for (let i = numbers[0].length - 1; i > -1; i--) {
    const sliced = numbers.map((number) => number.slice(i));
    const set = new Set();
    sliced.forEach((el) => set.add(el));
    if (set.size === numbers.length) {
      return sliced[0].length;
    }
  }
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...numbers] = inputs;

console.log(solution(numbers));
