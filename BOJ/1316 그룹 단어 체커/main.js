const solution = (words) => {
  let answer = 0;
  words.forEach((word) => {
    for (const char of word) {
      const removed = word.replace(new RegExp(`${char}+`), '');
      if (removed.includes(char)) {
        return;
      }
    }
    answer++;
  });
  return answer;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...strings] = inputs;

console.log(solution(strings));
