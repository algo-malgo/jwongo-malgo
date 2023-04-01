const solution = (newScore, P, scores) => {
  if (!scores) return 1;

  const sorted = scores.sort((a, b) => b - a).slice(0, P);

  sorted[0] = { score: sorted[0], ranking: 1 };
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i - 1].score === sorted[i]) {
      sorted[i] = sorted[i - 1];
    } else {
      sorted[i] = { score: sorted[i], ranking: i + 1 };
    }
  }

  if (sorted.length === P && sorted[sorted.length - 1].score >= newScore) {
    return -1;
  } else {
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i].score === newScore) {
        return sorted[i].ranking;
      } else if (sorted[i].score < newScore) {
        return sorted[i].ranking;
      }
    }
    return (
      sorted[sorted.length - 1].ranking + scores.filter((score) => sorted[sorted.length - 1].score === score).length
    );
  }
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');
const [line, numbers] = lines;

const [_, score, P] = line.split(' ').map(Number);

console.log(solution(score, P, numbers && numbers.split(' ').map(Number)));
