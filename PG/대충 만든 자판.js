function solution(keymap, targets) {
  const map = new Map();
  keymap.forEach((key) => {
    for (let i = 0; i < key.length; i++) {
      if (!map.get(key[i]) || map.get(key[i]) > i + 1) {
        map.set(key[i], i + 1);
      }
    }
  });

  return targets.map((target) => {
    let count = 0;
    for (const char of target) {
      if (!map.get(char)) {
        return -1;
      }
      count += map.get(char);
    }
    return count;
  });
}
