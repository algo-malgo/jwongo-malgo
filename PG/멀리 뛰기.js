function solution(n) {
  const dp = [null, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = ((dp[i - 1] % 1234567) + (dp[i - 2] % 1234567)) % 1234567;
  }
  return dp[n] % 1234567;
}
