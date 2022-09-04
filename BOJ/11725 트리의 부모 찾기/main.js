const solution = (edges) => {
  const tree = new Map();
  edges.forEach((edge) => {
    tree.get(edge[0])
      ? tree.get(edge[0]).push(edge[1])
      : tree.set(edge[0], [edge[1]]);
    tree.get(edge[1])
      ? tree.get(edge[1]).push(edge[0])
      : tree.set(edge[1], [edge[0]]);
  });

  const degrees = Array(edges.length + 1).fill(-1);
  let degree = 1;

  const visited = Array(edges.length + 1).fill(false);
  const queue = [];
  visited[1] = true;
  queue.push(1);
  degrees[1] = degree;
  while (queue.length) {
    degree++;
    const front = queue.shift();
    tree.get(front) &&
      tree.get(front).forEach((vertex) => {
        if (!visited[vertex]) {
          visited[vertex] = true;
          queue.push(vertex);
          degrees[vertex] = degree;
        }
      });
  }

  const answer = Array(edges.length + 1).fill(-1);
  edges.forEach((edge) => {
    if (degrees[edge[0]] > degrees[edge[1]]) answer[edge[0]] = edge[1];
    else answer[edge[1]] = edge[0];
  });

  answer.shift();
  answer.shift();
  console.log(answer.join('\n'));
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...lines] = inputs;

solution(lines.map((line) => line.split(' ').map(Number)));
