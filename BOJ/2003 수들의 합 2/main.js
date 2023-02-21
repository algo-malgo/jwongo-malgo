const solution = (M, numbers) => {
  let start = 0;
  let end = 0;
  let sum = numbers[0];
  let answer = 0;

  while (true) {
    if (start === numbers.length) {
      break;
    }

    if (end === numbers.length - 1) {
      if (sum === M) {
        answer++;
      }
      sum -= numbers[start++];
    } else if (sum < M) {
      sum += numbers[++end];
    } else if (sum >= M) {
      if (sum === M) {
        answer++;
      }
      sum -= numbers[start++];
    }
  }

  return answer;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');
const [line, numbers] = lines;

console.log(solution(line.split(' ').map(Number)[1], numbers.split(' ').map(Number)));
