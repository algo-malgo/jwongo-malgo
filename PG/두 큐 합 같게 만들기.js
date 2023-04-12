function solution(queue1, queue2) {
  let answer = 0;

  let sum1 = queue1.reduce((acc, curr) => acc + curr, 0);
  let sum2 = queue2.reduce((acc, curr) => acc + curr, 0);

  const queue = [...queue1, ...queue2];

  let cursor1 = 0;
  let cursor2 = queue1.length;

  while (true) {
    if (sum1 > sum2) {
      sum1 -= queue[cursor1 % queue.length];
      sum2 += queue[cursor1++ % queue.length];
      answer++;
    } else if (sum1 < sum2) {
      sum2 -= queue[cursor2 % queue.length];
      sum1 += queue[cursor2++ % queue.length];
      answer++;
    } else {
      break;
    }
    if (answer === queue1.length * 3) {
      return -1;
    }
  }

  return answer;
}
