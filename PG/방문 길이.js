function solution(dirs) {
  const visited = new Set();
  let x = 0;
  let y = 0;
  for (const dir of dirs) {
    switch (dir) {
      case 'U':
        if (y + 1 > 5) break;
        visited.add(`${x}${y}${x}${y + 1}`);
        visited.add(`${x}${y + 1}${x}${y}`);
        y++;
        break;
      case 'D':
        if (y - 1 < -5) break;
        visited.add(`${x}${y}${x}${y - 1}`);
        visited.add(`${x}${y - 1}${x}${y}`);
        y--;
        break;
      case 'R':
        if (x + 1 > 5) break;
        visited.add(`${x + 1}${y}${x}${y}`);
        visited.add(`${x}${y}${x + 1}${y}`);
        x++;
        break;
      case 'L':
        if (x - 1 < -5) break;
        visited.add(`${x - 1}${y}${x}${y}`);
        visited.add(`${x}${y}${x - 1}${y}`);
        x--;
        break;
    }
  }
  return [...visited].length / 2;
}
