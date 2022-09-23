function solution(s) {
  let answer = 0;
  const OPEN = ['(', '[', '{'];
  const CLOSE = [')', ']', '}'];

  const check = (str) => {
    const stack = [];
    for (const bracket of str) {
      if (OPEN.includes(bracket)) stack.push(bracket);
      else {
        if (
          stack.length &&
          OPEN.indexOf(stack[stack.length - 1]) === CLOSE.indexOf(bracket)
        )
          stack.pop();
        else return false;
      }
    }
    return stack.length < 1;
  };

  let rotated = s;
  for (let i = 0; i < s.length; i++) {
    rotated = rotated.substring(1) + rotated[0];
    check(rotated) && answer++;
  }

  return answer;
}
