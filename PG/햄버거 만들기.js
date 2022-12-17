function solution(ingredient) {
  const check = (idx) => {
    if (
      ingredient[idx] === 1 &&
      ingredient[idx + 1] === 2 &&
      ingredient[idx + 2] === 3 &&
      ingredient[idx + 3] === 1
    ) {
      return true;
    }
    return false;
  };

  let answer = 0;
  let i = 0;
  while (i < ingredient.length) {
    if (check(i)) {
      answer++;
      ingredient.splice(i, 4);
      i -= 3;
    } else {
      i++;
    }
  }

  return answer;
}
