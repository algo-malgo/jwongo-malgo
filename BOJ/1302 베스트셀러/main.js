const solution = (books) => {
  const map = new Map();
  books.forEach((book) => {
    map.set(book, map.get(book) + 1 || 1);
  });
  const sortedArr = Array.from(map).sort((a, b) => b[1] - a[1]);
  const max = sortedArr[0][1];
  return sortedArr
    .filter((el) => el[1] === max)
    .map((el) => el[0])
    .sort()[0];
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...numbers] = inputs;

console.log(solution(numbers));
