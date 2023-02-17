const solution = (words) => {
  let answer = 0;
  words.forEach((word) => {
    const stack = [];
    for (const char of word) {
      if (stack[stack.length - 1] !== char) {
        stack.push(char);
      } else {
        stack.pop();
      }
    }
    if (!stack.length) {
      answer++;
    }
  });
  return answer;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...numbers] = inputs;

console.log(solution(numbers));
