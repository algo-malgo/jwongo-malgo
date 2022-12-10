function solution(number) {
  let answer = 0;
  const dfs = (start, arr) => {
    if (arr.length === 3) {
      if (arr.reduce((acc, curr) => acc + curr, 0) === 0) {
        answer++;
      }
      return;
    }
    for (let i = start + 1; i < number.length; i++) {
      dfs(i, [...arr, number[i]]);
    }
  };
  for (let i = 0; i < number.length - 2; i++) {
    dfs(i, [number[i]]);
  }
  return answer;
}
