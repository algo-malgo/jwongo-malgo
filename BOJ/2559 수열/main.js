const solution = (N, K, numbers) => {
  const dp = [numbers[0]];
  for (let i = 1; i < K; i++) {
    dp[i] = dp[i - 1] + numbers[i];
  }
  for (let i = K; i < N; i++) {
    dp[i] = dp[i - 1] - numbers[i - K] + numbers[i];
  }
  return Math.max(...dp.slice(K - 1));
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');
const [line, numbers] = lines;

console.log(
  solution(...line.split(' ').map(Number), numbers.split(' ').map(Number))
);
