const solution = (initialString, commands) => {
  const left = initialString.split('');
  const right = [];
  let cursor = initialString.length;
  commands.forEach((command) => {
    switch (command[0]) {
      case 'L':
        if (cursor) {
          right.push(left.pop());
          cursor--;
        }
        break;
      case 'D':
        if (cursor < left.length + right.length) {
          left.push(right.pop());
          cursor++;
        }
        break;
      case 'B':
        if (cursor) {
          left.pop();
          cursor--;
        }
        break;
      case 'P':
        left.push(command[2]);
        cursor++;
        break;
    }
  });
  right.reverse();
  return left.join('') + right.join('');
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');
const [initialString, M, ...commands] = lines;

console.log(solution(initialString, commands));
