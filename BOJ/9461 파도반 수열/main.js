const solution = (cases) => {
  const dp = [0, 1, 1, 1, 2, 2];
  const max = Math.max(...cases);
  for (let i = 6; i <= max; i++) {
    dp[i] = dp[i - 5] + dp[i - 1];
  }
  console.log(cases.reduce((acc, curr) => [...acc, dp[curr]], []).join('\n'));
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');

solution(inputs.map(Number).slice(1));
