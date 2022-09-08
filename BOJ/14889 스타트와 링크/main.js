const solution = (N, S) => {
  const getCombinations = (arr, selectNumber) => {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((el) => [fixed, ...el]);
      results.push(...attached);
    });
    return results;
  };

  const getScore = (team) => {
    let score = 0;
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        if (team.includes(i) && team.includes(j)) {
          score += S[i][j];
          score += S[j][i];
        }
      }
    }
    return score;
  };

  let answer = Number.MAX_SAFE_INTEGER;

  getCombinations(
    Array(N)
      .fill(null)
      .map((_, idx) => idx),
    N / 2
  ).forEach((start) => {
    const link = Array(N)
      .fill(null)
      .map((_, idx) => idx)
      .filter((n) => !start.includes(n));
    const startScore = getScore(start);
    const linkScore = getScore(link);
    answer = Math.min(answer, Math.abs(startScore - linkScore));
  });
  return answer;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...lines] = inputs;

console.log(
  solution(
    +N,
    lines.map((line) => line.split(' ').map(Number))
  )
);
