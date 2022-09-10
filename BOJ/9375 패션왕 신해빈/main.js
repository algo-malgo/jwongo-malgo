const solution = (cases) => {
  const answer = [];
  cases.forEach((clothes) => {
    const map = new Map();
    clothes.forEach((c) => {
      map.set(c[1], map.get(c[1]) + 1 || 1);
    });
    answer.push(
      Array.from(map).reduce((acc, curr) => (curr[1] + 1) * acc, 1) - 1
    );
  });
  return answer.join('\n');
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [T, ...lines] = inputs;

const cases = [];
let n;
for (line of lines) {
  if (!n) {
    n = +line;
    cases.push([]);
  } else if (cases[cases.length - 1].length < n) {
    cases[cases.length - 1].push(line.split(' '));
    if (cases[cases.length - 1].length === n) n = undefined;
  }
}

console.log(solution(cases));
