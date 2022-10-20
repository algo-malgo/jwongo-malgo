function solution(priorities, location) {
  const queue = [];
  priorities.forEach((priority, idx) => queue.push([idx, priority]));
  let cnt = 0;
  while (queue.length) {
    const front = queue.shift();
    if (queue.some((val) => val[1] > front[1])) {
      queue.push(front);
    } else {
      cnt++;
      if (front[0] === location) return cnt;
    }
  }
}
