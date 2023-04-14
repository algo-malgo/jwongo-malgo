function solution(N, road, K) {
  const graph = new Map();
  road.forEach((r) => {
    graph.set(
      r[0],
      graph.get(r[0]) ? [...graph.get(r[0]), { vertex: r[1], weight: r[2] }] : [{ vertex: r[1], weight: r[2] }]
    );
    graph.set(
      r[1],
      graph.get(r[1]) ? [...graph.get(r[1]), { vertex: r[0], weight: r[2] }] : [{ vertex: r[0], weight: r[2] }]
    );
  });
  const dist = Array(N + 1).fill(Infinity);
  dist[1] = 0;
  const visited = Array(N + 1).fill(false);

  const getSmallestNode = () => {
    let min = Infinity;
    let vertex;
    for (let i = 1; i <= N; i++) {
      if (dist[i] < min && !visited[i]) {
        min = dist[i];
        vertex = i;
      }
    }
    return { vertex, weight: min };
  };

  for (let i = 0; i < N - 1; i++) {
    const curr = getSmallestNode();
    visited[curr.vertex] = true;
    graph.get(curr.vertex).forEach((adj) => {
      if (curr.weight + adj.weight < dist[adj.vertex]) {
        dist[adj.vertex] = curr.weight + adj.weight;
      }
    });
  }

  return dist.filter((val) => val <= K).length;
}
