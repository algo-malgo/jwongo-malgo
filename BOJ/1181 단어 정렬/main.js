const solution = (words) => {
  const set = new Set(words);
  return [...set]
    .sort((a, b) => {
      if (a.length === b.length) {
        if (a > b) return 1;
        else return -1;
      } else {
        return a.length - b.length;
      }
    })
    .join('\n');
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...words] = inputs;

console.log(solution(words));
