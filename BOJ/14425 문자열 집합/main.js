const solution = (S, strings) => {
  let answer = 0;
  const set = new Set(S);
  strings.forEach((s) => {
    if (set.has(s)) answer++;
  });
  return answer;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');
const [NM, ...strings] = lines;

const [N, M] = NM.split(' ').map(Number);
const strings1 = [];
const strings2 = [];
for (let i = 0; i < N; i++) {
  strings1.push(strings[i]);
}
for (let i = N; i < N + M; i++) {
  strings2.push(strings[i]);
}

console.log(solution(strings1, strings2));
