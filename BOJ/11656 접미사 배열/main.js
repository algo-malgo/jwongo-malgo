const solution = (S) => {
  const answer = [];
  for (let i = 0; i < S.length; i++) {
    answer.push(S.slice(i));
  }
  return answer.sort().join('\n');
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const string = fs.readFileSync(file).toString().trim();

console.log(solution(string));
