function solution(n, edge) {
  const graph = [];
  for (let i = 0; i <= n; i++) {
    graph.push(new Array());
  }
  edge.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  });

  const queue = [];
  const visited = Array(n + 1).fill(false);
  const distances = Array(n + 1).fill(-1);
  visited[1] = true;
  queue.push(1);
  distances[1] = 0;
  while (queue.length) {
    const front = queue.shift();
    for (let i = 0; i < graph[front].length; i++) {
      if (!visited[graph[front][i]]) {
        visited[graph[front][i]] = true;
        queue.push(graph[front][i]);
        distances[graph[front][i]] = distances[front] + 1;
      }
    }
  }

  const max = Math.max(...distances);
  const answer = [];
  distances.forEach((val, idx) => {
    if (val === max) answer.push(idx);
  });
  return answer.length;
}
