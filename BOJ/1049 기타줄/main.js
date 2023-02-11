const solution = (N, brands) => {
  const minPackage = [...brands].sort((a, b) => a[0] - b[0])[0][0];
  const minPiece = [...brands].sort((a, b) => a[1] - b[1])[0][1];

  return Math.min(Math.floor(N / 6) * minPackage + (N % 6) * minPiece, minPiece * N, Math.ceil(N / 6) * minPackage);
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');
const [line, ...numbers] = lines;

console.log(
  solution(
    +line.split(' ')[0],
    numbers.map((str) => str.split(' ').map(Number))
  )
);
