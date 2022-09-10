const solution = (A, B, C) => {
  A = BigInt(A);
  C = BigInt(C);
  const isEven = B % 2 === 0;
  const pow = (exponent) => {
    if (exponent === 1) return A % C;
    const half = pow(Math.floor(exponent / 2));
    if (isEven) return (half * half) % C;
    return (((half * half) % C) * (A % C)) % C;
  };
  return pow(B).toString();
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [A, B, C] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(solution(A, B, C));
