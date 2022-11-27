function solution(k, score) {
  const answer = [];
  const fames = [];
  score.forEach((s) => {
    fames.push(s);
    fames.sort((a, b) => b - a);
    if (fames.length < k) {
      answer.push(fames[fames.length - 1]);
    } else {
      answer.push(fames[k - 1]);
    }
  });
  return answer;
}
