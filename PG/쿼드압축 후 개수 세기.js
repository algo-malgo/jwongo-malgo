function solution(arr) {
  const answer = [0, 0];

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
    return { isDiff, number: first };
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
      if (square[0][0] === 0) {
        answer[0]++;
      } else {
        answer[1]++;
      }
      return;
    }
    const { isDiff, number } = checkSquare(square);
    if (isDiff) {
      for (let i = 1; i <= 4; i++) {
        split(getSplitSquare(square, i));
      }
    } else {
      if (number === 0) {
        answer[0]++;
      } else {
        answer[1]++;
      }
    }
  };

  split(arr);

  return answer;
}
