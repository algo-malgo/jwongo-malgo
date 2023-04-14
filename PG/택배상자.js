function solution(order) {
  let answer = 0;
  const stack = [];
  const queue = Array(order.length)
    .fill(1)
    .map((number, index) => number + index);

  let cursor = 0;
  let queueIndex = 0;

  while (cursor < order.length) {
    if (order[cursor] === queue[queueIndex] || order[cursor] === stack[stack.length - 1]) {
      if (order[cursor] === queue[queueIndex]) {
        queueIndex++;
      } else {
        stack.pop();
      }
      answer++;
      cursor++;
    } else {
      if (queueIndex === queue.length) {
        break;
      }
      stack.push(queue[queueIndex++]);
    }
  }

  return answer;
}
