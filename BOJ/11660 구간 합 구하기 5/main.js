const solution = (table, sections) => {
  const answer = [];

  for (let i = 0; i < table.length; i++) {
    for (let j = 1; j < table.length; j++) {
      table[i][j] += table[i][j - 1];
    }
  }

  sections.forEach(([x1, y1, x2, y2]) => {
    let sum = 0;
    for (let i = x1 - 1; i < x2; i++) {
      sum += table[i][y1 - 2] ? table[i][y2 - 1] - table[i][y1 - 2] : table[i][y2 - 1];
    }
    answer.push(sum);
  });
  return answer.join('\n');
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');
const [NM, ...numberLines] = lines;

const [N, M] = NM.split(' ').map(Number);
const arr1 = numberLines.slice(0, N).map((line) => line.split(' ').map(Number));
const arr2 = numberLines.slice(N, N + M).map((line) => line.split(' ').map(Number));

console.log(solution(arr1, arr2));
