const solution = (N) => {
  const dp = [null, 1, 2];
  for (let i = 3; i <= N; i++) {
    dp[i] = ((dp[i - 1] % 15746) + (dp[i - 2] % 15746)) % 15746;
  }
  return dp[N] % 15746;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const N = +fs.readFileSync(file).toString().trim();

console.log(solution(N));
