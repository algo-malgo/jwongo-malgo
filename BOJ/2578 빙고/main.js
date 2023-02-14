const solution = (board, numbers) => {
  const checkBingo = () => {
    let result = 0;
    let rightDiagonal = 0;
    let leftDiagonal = 0;
    for (let i = 0; i < 5; i++) {
      let vertical = 0;
      let horizontal = 0;
      for (let j = 0; j < 5; j++) {
        if (board[i][j] === 0) {
          horizontal++;
        }
        if (board[j][i] === 0) {
          vertical++;
        }
      }
      if (horizontal === 5) {
        result++;
      }
      if (vertical === 5) {
        result++;
      }
      if (board[i][i] === 0) {
        rightDiagonal++;
      }
      if (board[4 - i][i] === 0) {
        leftDiagonal++;
      }
    }
    if (rightDiagonal === 5) {
      result++;
    }
    if (leftDiagonal === 5) {
      result++;
    }
    return result;
  };

  return (
    numbers.findIndex((number) => {
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          if (board[i][j] === number) {
            board[i][j] = 0;
            if (checkBingo() >= 3) {
              return true;
            }
          }
        }
      }
      return false;
    }) + 1
  );
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');

console.log(
  solution(
    lines.slice(0, 5).map((line) => line.split(' ').map(Number)),
    lines
      .slice(5)
      .map((line) => line.split(' ').map(Number))
      .flat()
  )
);
