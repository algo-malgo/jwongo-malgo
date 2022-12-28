const solution = (N, M, rows) => {
  let answer = 1251;
  const draw = (chessboard, startColor) => {
    let color = startColor;
    let count = 0;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (chessboard[i][j] !== color) count++;
        color = color === 'B' ? 'W' : 'B';
      }
      color = color === 'B' ? 'W' : 'B';
    }
    return count;
  };
  for (let i = 0; i < N - 8 + 1; i++) {
    for (let j = 0; j < M - 8 + 1; j++) {
      const chessboard = rows
        .slice(i, i + 8)
        .map((row) => row.split('').slice(j, j + 8));
      answer = Math.min(draw(chessboard, 'B'), draw(chessboard, 'W'), answer);
    }
  }
  return answer;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');
const [line, ...strings] = lines;

console.log(solution(...line.split(' ').map(Number), strings));
