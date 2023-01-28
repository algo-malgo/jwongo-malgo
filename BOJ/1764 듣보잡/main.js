const solution = (noHearPeople, noSeenPeople) => {
  const map = new Map();
  noHearPeople.forEach((person) => {
    map.set(person, map.get(person) + 1 || 1);
  });
  noSeenPeople.forEach((person) => {
    map.set(person, map.get(person) + 1 || 1);
  });
  const answer = [];
  const arrayMap = Array.from(map)
    .filter((el) => el[1] === 2)
    .map((el) => el[0])
    .sort();
  answer.push(arrayMap.length, ...arrayMap);
  return answer.join('\n');
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');
const [NM, ...strings] = lines;

const [N, M] = NM.split(' ').map(Number);
const strings1 = [];
const strings2 = [];
for (let i = 0; i < N; i++) {
  strings1.push(strings[i]);
}
for (let i = N; i < N + M; i++) {
  strings2.push(strings[i]);
}

console.log(solution(strings1, strings2));
