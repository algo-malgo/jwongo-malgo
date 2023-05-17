const solution = (A, B) => {
  let answer = Number.MAX_SAFE_INTEGER;
  const dfs = (n, count) => {
    if (n === B) {
      answer = Math.min(count, answer);
      return;
    }
    if (n > B) {
      return;
    }
    dfs(n * 2, count + 1);
    dfs(Number(n + '1'), count + 1);
  };
  dfs(A, 1);
  return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, M] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

console.log(solution(N, M));
