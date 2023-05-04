function solution(maps) {
  const answer = [];
  const map = maps.map((row) => row.split('').map((space) => (isNaN(+space) ? space : +space)));
  const moves = [(x, y) => [x + 1, y], (x, y) => [x - 1, y], (x, y) => [x, y + 1], (x, y) => [x, y - 1]];
  const visited = Array.from(Array(map.length), () => Array(map[0].length).fill(false));
  const queue = [];

  const visit = (x, y) => {
    if (!(map[x] && map[x][y])) return 0;

    if (map[x][y] !== 'X' && !visited[x][y]) {
      queue.push([x, y]);
      visited[x][y] = true;
      return map[x][y];
    }
    return 0;
  };

  const bfs = (x, y) => {
    let count = map[x][y];
    queue.push([x, y]);
    visited[x][y] = true;
    while (queue.length > 0) {
      const temp = queue.shift();
      for (const move of moves) {
        count += visit(...move(temp[0], temp[1]));
      }
    }
    return count;
  };

  map.forEach((row, x) => {
    row.forEach((_, y) => {
      if (map[x][y] !== 'X' && !visited[x][y]) {
        answer.push(bfs(x, y));
      }
    });
  });

  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
