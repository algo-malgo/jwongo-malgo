const solution = (M, words) => {
  const map = new Map();
  words.filter((word) => word.length >= M).forEach((word) => map.set(word, map.get(word) + 1 || 1));
  return Array.from(map)
    .sort((a, b) => {
      if (a[1] === b[1]) {
        if (a[0].length === b[0].length) {
          if (a[0] < b[0]) {
            return -1;
          }
          if (a[0] > b[0]) {
            return 1;
          }
          return 0;
        }
        return b[0].length - a[0].length;
      }
      return b[1] - a[1];
    })
    .map((wordMap) => wordMap[0])
    .join('\n');
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');
const [line, ...strings] = lines;

console.log(solution(line.split(' ').map(Number)[1], strings));
