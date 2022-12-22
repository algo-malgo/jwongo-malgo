function solution(k, tangerine) {
  const map = new Map();
  tangerine.forEach((t) => {
    map.set(t, map.get(t) + 1 || 1);
  });
  const sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
  let tangerineCount = 0;
  let index = 0;
  while (tangerineCount < k) {
    tangerineCount += sorted[index][1];
    index++;
  }
  return index;
}
