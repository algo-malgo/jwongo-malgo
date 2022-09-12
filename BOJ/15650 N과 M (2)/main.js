const solution = (N, M) => {
  const answer = [];

  const visited = Array(N + 1).fill(false);
  visited[0] = null;

  const dfs = (arr) => {
    if (arr.length === M) answer.push(arr);
    else {
      const thisVisited = [];
      for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
          visited[i] = true;
          dfs([...arr, i]);
          thisVisited.push(i);
        }
      }
      for (let i = 0; i < thisVisited.length; i++) {
        visited[thisVisited[i]] = false;
      }
    }
  };
  dfs([]);
  // console.log(answer);
  return answer.map((arr) => arr.join(' ')).join('\n');
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, M] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

console.log(solution(N, M));
