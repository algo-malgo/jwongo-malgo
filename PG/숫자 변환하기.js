function solution(x, y, n) {
  if (x === y) return 0;

  const visited = new Set();

  visited.add(x);

  let queueIndex = 0;

  const queue = [
    { number: x + n, count: 1 },
    { number: x * 2, count: 1 },
    { number: x * 3, count: 1 },
  ];

  while (queueIndex < queue.length) {
    const { number, count } = queue[queueIndex++];

    if (number > y || visited.has(number)) {
      continue;
    }

    if (number === y) {
      return count;
    }

    visited.add(number);

    queue.push(
      { number: number + n, count: count + 1 },
      { number: number * 2, count: count + 1 },
      { number: number * 3, count: count + 1 }
    );
  }

  return -1;
}
