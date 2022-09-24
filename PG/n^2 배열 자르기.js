function solution(n, left, right) {
  const answer = Array.from(Array(n), () => Array(n).fill(-1));
  answer[0][0] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      answer[j][i - 1] = i;
      answer[i - 1][j] = i;
    }
  }
  return answer.flat().slice(left, right + 1);
}
