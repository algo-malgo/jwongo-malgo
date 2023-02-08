const solution = (A, B) => {
  const map = new Map();
  A.forEach((el) => map.set(el, 1));
  B.forEach((el) => map.set(el, map.get(el) + 1 || 1));
  return Array.from(map).filter((el) => el[1] === 1).length;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');
const [NM, numbers1, numbers2] = lines;

console.log(solution(numbers1.split(' ').map(Number), numbers2.split(' ').map(Number)));
