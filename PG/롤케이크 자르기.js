function solution(topping) {
  let answer = 0;

  const 철수 = new Map();
  const 동생 = new Map();

  topping.forEach((t, index) => {
    철수.set(t, 철수.get(t) + 1 || 1);
  });

  topping.forEach((t) => {
    동생.set(t, 동생.get(t) + 1 || 1);
    철수.set(t, 철수.get(t) - 1);

    if (철수.get(t) < 1) {
      철수.delete(t);
    }

    if (동생.size === 철수.size) {
      answer++;
    }
  });

  return answer;
}
