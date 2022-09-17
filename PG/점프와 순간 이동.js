function solution(n) {
  const dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) dp[i] = Math.min(dp[i - 1] + 1, dp[i / 2]);
    else dp[i] = dp[i - 1] + 1;
  }

  return dp[n];
}
