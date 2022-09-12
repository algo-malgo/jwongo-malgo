const solution = (N, M) => {
  const answer = [];

  const dfs = (arr) => {
    if (arr.length === M) answer.push(arr);
    else {
      let i = arr.length ? arr[arr.length - 1] : 1;
      for (; i <= N; i++) {
        dfs([...arr, i]);
      }
    }
  };
  dfs([]);
  return answer.map((arr) => arr.join(' ')).join('\n');
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, M] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

console.log(solution(N, M));
