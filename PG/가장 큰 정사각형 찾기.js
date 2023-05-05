function solution(board) {
  const visited = Array.from(Array(board.length), () => Array(board[0].length).fill(false));

  const getSquareSize = (x, y) => {
    let sideLength = 1;
    while (x + sideLength < board.length && y + sideLength < board[0].length) {
      let isSquare = true;

      for (let i = 0; i < sideLength; i++) {
        visited[x + sideLength][y + i] = true;
        visited[x + i][y + sideLength] = true;
        if (board[x + sideLength][y + i] === 0 || board[x + i][y + sideLength] === 0) {
          isSquare = false;
          break;
        }
      }
      visited[x + sideLength][y + sideLength] = true;
      if (board[x + sideLength][y + sideLength] === 0) {
        isSquare = false;
      }

      if (isSquare) {
        sideLength++;
      } else {
        break;
      }
    }
    return sideLength * sideLength;
  };

  let answer = -1;
  board.forEach((row, x) => {
    row.forEach((_, y) => {
      if (board[x][y] === 1 && !visited[x][y]) {
        answer = Math.max(getSquareSize(x, y), answer);
      }
    });
  });
  return answer;
}
