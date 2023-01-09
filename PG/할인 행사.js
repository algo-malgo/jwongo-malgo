function solution(want, number, discount) {
  const map = new Map();
  want.forEach((w, idx) => {
    map.set(w, number[idx]);
  });

  let answer = 0;
  for (let i = 0; i <= discount.length - 10; i++) {
    const sliced = discount.slice(i, i + 10);
    if (want.every((w) => sliced.filter((s) => s === w).length === map.get(w))) answer++;
  }

  return answer;
}
