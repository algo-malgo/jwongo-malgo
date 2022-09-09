const solution = (commands) => {
  const answer = [];
  const stack = [];
  commands.forEach((command) => {
    const splits = command.split(' ');
    switch (splits[0]) {
      case 'push':
        stack.push(splits[1]);
        break;
      case 'pop':
        if (stack.length) answer.push(stack.pop());
        else answer.push(-1);
        break;
      case 'size':
        answer.push(stack.length);
        break;
      case 'empty':
        answer.push(stack.length ? 0 : 1);
        break;
      case 'top':
        answer.push(stack.length ? stack[stack.length - 1] : -1);
        break;
    }
  });
  return answer.join('\n');
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...commands] = inputs;

console.log(solution(commands));
