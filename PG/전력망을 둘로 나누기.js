function solution(n, wires) {
  let answer = 101;

  let graph;
  let visited;

  const bfs = (start) => {
    let count = 0;

    const queue = [start];
    visited[start] = true;

    while (queue.length) {
      const current = queue.shift();

      graph.get(current)?.forEach((adj) => {
        if (!visited[adj]) {
          count++;
          visited[adj] = true;
          queue.push(adj);
        }
      });
    }

    return count;
  };

  for (let i = 0; i < wires.length; i++) {
    const sliced = [...wires.slice(0, i), ...wires.slice(i + 1)];
    graph = new Map();
    sliced.forEach((edge) => {
      graph.set(edge[0], graph.get(edge[0]) ? [...graph.get(edge[0]), edge[1]] : [edge[1]]);
      graph.set(edge[1], graph.get(edge[1]) ? [...graph.get(edge[1]), edge[0]] : [edge[0]]);
    });

    visited = Array(n + 1).fill(false);
    visited[0] = null;

    const count1 = bfs(visited.indexOf(false));
    const count2 = bfs(visited.indexOf(false));

    answer = Math.min(Math.abs(count1 - count2), answer);
  }

  return answer;
}
