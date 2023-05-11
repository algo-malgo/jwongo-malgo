const solution = (messages) => {
  let firstChat = new Set();
  let answer = 0;
  messages.forEach((message) => {
    if (message === 'ENTER') {
      answer += firstChat.size;
      firstChat = new Set();
    } else {
      firstChat.add(message);
    }
  });
  answer += firstChat.size;
  return answer;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...strings] = inputs;

console.log(solution(strings));
