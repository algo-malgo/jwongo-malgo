const solution = (paper) => {
  const BLUE = 1;
  let blue = 0;
  let white = 0;

  const checkSquare = (square) => {
    const first = square[0][0];
    let isDiff = false;
    for (let i = 0; i < square.length; i++) {
      for (let j = 0; j < square[0].length; j++) {
        if (square[i][j] !== first) {
          isDiff = true;
          break;
        }
      }
      if (isDiff) {
        break;
      }
    }
    return { isDiff, color: first };
  };

  const getSplitSquare = (square, quadrant) => {
    switch (quadrant) {
      case 1:
        return square.slice(0, square.length / 2).map((row) => row.slice(square.length / 2));
      case 2:
        return square.slice(0, square.length / 2).map((row) => row.slice(0, square.length / 2));
      case 3:
        return square.slice(square.length / 2).map((row) => row.slice(0, square.length / 2));
      case 4:
        return square.slice(square.length / 2).map((row) => row.slice(square.length / 2));
    }
  };

  const split = (square) => {
    if (square.length === 1) {
      if (square[0][0] === BLUE) {
        blue++;
      } else {
        white++;
      }
      return;
    }
    const { isDiff, color } = checkSquare(square);
    if (isDiff) {
      for (let i = 1; i <= 4; i++) {
        split(getSplitSquare(square, i));
      }
    } else {
      if (color === BLUE) {
        blue++;
      } else {
        white++;
      }
    }
  };

  split(paper);

  return [white, blue].join('\n');
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...lines] = inputs;

console.log(
  solution(
    lines.map((line) => line.split(' ').map(Number)) // split 기준 주의 (0000 형태인지, 0 0 0 0 형태인지)
  )
);
