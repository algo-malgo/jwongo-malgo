const solution = (strings) => {
  const check = (string) => {
    const stack = [];
    if (string.replace(/\(/g, '').length !== string.length / 2) return 'NO';
    for (const bracket of string) {
      if (!stack.length && bracket === ')') return 'NO';
      if (bracket === ')' && stack[stack.length - 1] === '(') stack.pop();
      else stack.push(bracket);
    }
    return stack.length ? 'NO' : 'YES';
  };
  const answer = [];
  for (const string of strings) {
    answer.push(check(string));
  }
  return answer.join('\n');
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...strings] = inputs;

console.log(solution(strings));
