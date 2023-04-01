function solution(n) {
  const answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(Array(i + 1).fill(null));
  }

  const paint = (height, startPosition, startNumber) => {
    if (height < 1) {
      return;
    }

    let number = startNumber;

    for (let i = startPosition.x; i < height + startPosition.x; i++, number++) {
      answer[i][startPosition.y] = number;
    }
    for (let i = startPosition.y + 1; i < startPosition.y + height; i++, number++) {
      answer[startPosition.x + height - 1][i] = number;
    }
    for (
      let i = startPosition.x + height - 2, j = startPosition.y + height - 2;
      i > startPosition.x, j > startPosition.y;
      i--, j--, number++
    ) {
      answer[i][j] = number;
    }

    paint(height - 3, { x: startPosition.x + 2, y: startPosition.y + 1 }, number);
  };

  paint(n, { x: 0, y: 0 }, 1);

  return answer.flat();
}
