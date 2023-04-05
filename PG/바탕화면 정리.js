function solution(wallpaper) {
  const start = { x: 51, y: 51 };
  const end = { x: -1, y: -1 };
  wallpaper.forEach((row, i) => {
    for (let j = 0; j < row.length; j++) {
      if (row[j] === '#') {
        if (start.x > i) {
          start.x = i;
        }
        if (start.y > j) {
          start.y = j;
        }
        if (end.x < i + 1) {
          end.x = i + 1;
        }
        if (end.y < j + 1) {
          end.y = j + 1;
        }
      }
    }
  });
  return [start.x, start.y, end.x, end.y];
}
