const solution = (pokemons, quiz) => {
  const answer = [];
  quiz.forEach((q) => {
    if (isNaN(+q)) {
      answer.push(pokemons.indexOf(q) + 1);
    } else {
      answer.push(pokemons[Number(q) - 1]);
    }
  });
  return answer.join('\n');
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');
const [NM, ...cases] = lines;

const [N, M] = NM.split(' ');
console.log(solution(cases.slice(0, N), cases.slice(N, N + M)));
