const solution = (numbers, x) => {
  numbers.sort((a, b) => a - b);
  let answer = 0;
  numbers.forEach((number, idx) => {
    for (let i = idx + 1; i < numbers.length; i++) {
      const sum = number + numbers[i];
      if (sum >= x) {
        if (sum === x) {
          answer++;
        }
        break;
      }
    }
  });
  return answer;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, numbers, x] = inputs;

console.log(solution(numbers.split(' ').map(Number), +x));
