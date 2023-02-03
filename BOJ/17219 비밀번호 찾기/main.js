const solution = (info, quiz) => {
  const map = new Map();
  info.forEach((el) => {
    const [url, password] = el.split(' ');
    map.set(url, password);
  });
  const answer = [];
  quiz.forEach((el) => {
    answer.push(map.get(el));
  });
  return answer.join('\n');
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [NM, ...lines] = inputs;

const [N, M] = NM.split(' ');

console.log(solution(lines.slice(0, N), lines.slice(N)));
