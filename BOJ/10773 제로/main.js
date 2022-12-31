const solution = (numbers) => {
  const stack = [];
  numbers.forEach((num) => {
    if (num === 0) stack.pop();
    else stack.push(num);
  });
  return stack.reduce((acc, curr) => acc + curr, 0);
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...numbers] = inputs;

console.log(solution(numbers.map(Number)));
