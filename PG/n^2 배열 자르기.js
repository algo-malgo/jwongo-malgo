function solution(n, left, right) {
  const answer = [1];
  for (let i = 2n; i <= n; i = i + 1n) {
    for (let j = 0n; j < i; j = j + 1n) {
      answer[BigInt(n) * j + (i - 1n)] = i;
      answer[BigInt(n) * (i - 1n) + j] = i;
    }
  }
  return answer.slice(left, right + 1);
}
