const solution = (numbers) => {
  const dp = [numbers[0]];
  for (let i = 1; i < numbers.length; i++) {
    dp[i] = Math.max(dp[i - 1] + numbers[i], numbers[i]);
  }
  return Math.max(...dp);
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, numbers] = inputs;

console.log(solution(numbers.split(' ').map(Number)));
