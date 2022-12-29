const solution = (pokemons, quiz) => {
  const answer = [];
  const pokemonMap = new Map();
  const indexMap = new Map();
  pokemons.forEach((pokemon, idx) => {
    pokemonMap.set(pokemon, idx + 1);
    indexMap.set(idx + 1, pokemon);
  });
  quiz.forEach((q) => {
    answer.push(isNaN(+q) ? pokemonMap.get(q) : indexMap.get(+q));
  });
  return answer.join('\n');
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');
const [NM, ...cases] = lines;

const [N, M] = NM.split(' ');
console.log(solution(cases.slice(0, N), cases.slice(N, N + M)));
