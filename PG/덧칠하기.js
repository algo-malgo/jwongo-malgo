function solution(n, m, section) {
  let roller = m - 1;
  let answer = 1;
  for (let i = 1; i < section.length; i++) {
    const gap = section[i] - section[i - 1];
    if (roller - gap >= 0) {
      roller -= gap;
    } else {
      roller = m - 1;
      answer++;
    }
  }
  return answer;
}
