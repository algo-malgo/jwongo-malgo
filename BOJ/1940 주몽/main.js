const solution = (M, numbers) => {
  numbers.sort((a, b) => a - b);

  let start = 0;
  let end = numbers.length - 1;
  let answer = 0;

  while (start < end) {
    if (numbers[start] + numbers[end] < M) {
      start++;
    } else if (numbers[start] + numbers[end] === M) {
      answer++;
      start++;
      end++;
    } else {
      end--;
    }
  }

  return answer;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');
const [N, M, numbers] = lines;

console.log(solution(+M, numbers.split(' ').map(Number)));
