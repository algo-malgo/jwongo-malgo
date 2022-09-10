const solution = (N, schedule) => {
  schedule.forEach((s, idx) => {
    s.push(s[0] + idx);
  });
  schedule = schedule.filter((s) => s[2] <= N);
  schedule.sort((a, b) => a[2] - b[2]);

  const dp = [0];
  let max = 0;
  for (let i = 1; i <= N; i++) {
    dp[i] = dp[i - 1];
    while (schedule.length && schedule[0][2] === i) {
      dp[i] = Math.max(
        dp[schedule[0][2] - schedule[0][0]] + schedule[0][1],
        dp[i]
      );
      schedule.shift();
    }
    max = Math.max(dp[i], max);
  }
  return max;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...schedule] = inputs;

console.log(
  solution(
    +N,
    schedule.map((s) => s.split(' ').map(Number))
  )
);
