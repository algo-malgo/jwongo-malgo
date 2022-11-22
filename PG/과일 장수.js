function solution(k, m, score) {
  score.sort((a, b) => b - a);
  let answer = 0;
  for (let i = m; i <= score.length; i += m) {
    answer += score[i - 1] * m;
  }
  return answer;
}
