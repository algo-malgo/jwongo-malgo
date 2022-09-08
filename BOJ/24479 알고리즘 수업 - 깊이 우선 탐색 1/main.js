const solution = (N, R, edges) => {
  const graph = Array.from({ length: N + 1 }, () => new Array());
  edges.forEach((edge) => {
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
  });
  graph.forEach((vertex) => {
    vertex.sort((a, b) => a - b);
  });
  const visited = Array(N + 1).fill(false);
  const answer = Array(N + 1).fill(0);
  let cnt = 0;
  const dfs = (vertex) => {
    cnt++;
    answer[vertex] = cnt;
    visited[vertex] = true;
    graph[vertex].forEach((next) => {
      visited[next] || dfs(next);
    });
  };
  dfs(R);
  return answer.slice(1).join('\n');
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');
const [line, ...numbers] = lines;

const [N, M, R] = line.split(' ').map(Number);

console.log(
  solution(
    N,
    R,
    numbers.map((s) => s.split(' ').map(Number))
  )
);
