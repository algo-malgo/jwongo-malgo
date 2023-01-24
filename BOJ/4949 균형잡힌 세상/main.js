const solution = (strings) => {
  const openReg = /[\[\(]/;
  const closeReg = /[\]\)]/;
  const answer = [];
  strings.forEach((string) => {
    const stack = [];
    let result;
    for (const char of string) {
      if (openReg.test(char)) {
        stack.push(char);
        continue;
      }
      if (closeReg.test(char)) {
        const top = stack[stack.length - 1];
        if (!stack.length) {
          result = 'no';
          break;
        } else if ((top === '[' && char === ']') || (top === '(' && char === ')')) {
          stack.pop();
        } else {
          result = 'no';
          break;
        }
      }
    }
    if (!result) {
      if (stack.length) {
        result = 'no';
      } else {
        result = 'yes';
      }
    }
    answer.push(result);
  });
  return answer.join('\n');
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');

console.log(solution(inputs.slice(0, inputs.length - 1)));
