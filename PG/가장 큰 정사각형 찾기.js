function solution(board) {
  let answer = 0;
  board.forEach((row, x) => {
    row.forEach((_, y) => {
      if (board[x][y] > 0 && board[x - 1] && board[x - 1][y - 1]) {
        board[x][y] = Math.min(board[x - 1][y], board[x - 1][y - 1], board[x][y - 1]) + 1;
      }
      answer = Math.max(board[x][y], answer);
    });
  });
  return answer * answer;
}
