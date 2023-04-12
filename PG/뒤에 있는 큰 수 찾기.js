function solution(numbers) {
  const answer = [];

  const stack = [];

  for (let i = numbers.length - 1; i > -1; i--) {
    while (stack.length) {
      if (stack[stack.length - 1] > numbers[i]) {
        answer.push(stack[stack.length - 1]);
        stack.push(numbers[i]);
        break;
      } else {
        stack.pop();
      }
    }
    if (!stack.length) {
      stack.push(numbers[i]);
      answer.push(-1);
    }
  }

  return answer.reverse();
}
