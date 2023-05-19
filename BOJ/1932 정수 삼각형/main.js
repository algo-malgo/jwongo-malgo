const solution = (triangle) => {
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j <= i; j++) {
      triangle[i][j] = triangle[i][j] + Math.max(triangle[i - 1][j - 1] ?? 0, triangle[i - 1][j] ?? 0);
    }
  }

  return Math.max(...triangle[triangle.length - 1]);
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...lines] = inputs;

console.log(solution(lines.map((line) => line.split(' ').map(Number))));
