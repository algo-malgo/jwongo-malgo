const solution = (N, M) => {
  const answer = [];
  const recursive = (permutation) => {
    if (permutation.length === M) return answer.push(permutation);
    for (let i = 1; i <= N; i++) {
      recursive([...permutation, i]);
    }
  };
  for (let i = 1; i <= N; i++) {
    recursive([i]);
  }
  return answer.map((permutation) => permutation.join(' ')).join('\n');
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, M] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map((c) => +c);

console.log(solution(N, M));
