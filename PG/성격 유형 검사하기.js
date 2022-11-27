function solution(survey, choices) {
  const scores = [
    { R: 0, T: 0 },
    { C: 0, F: 0 },
    { J: 0, M: 0 },
    { A: 0, N: 0 },
  ];
  const SCORE = [null, 3, 2, 1, 0, 1, 2, 3];

  const compareHigher = (choice) => {
    if (choice < 4) return 0;
    if (choice === 4) return null;
    if (choice > 4) return 1;
  };

  survey.forEach((type, idx) => {
    const choice = choices[idx];
    const higher = compareHigher(choice);
    if (higher === null) return;
    if (type.includes('R')) {
      scores[0][type[higher]] += SCORE[choice];
    } else if (type.includes('C')) {
      scores[1][type[higher]] += SCORE[choice];
    } else if (type.includes('J')) {
      scores[2][type[higher]] += SCORE[choice];
    } else if (type.includes('A')) {
      scores[3][type[higher]] += SCORE[choice];
    }
  });

  const getHigherType = (score) => {
    const types = Object.keys(score);
    types.sort();
    if (score[types[0]] >= score[types[1]]) return types[0];
    if (score[types[0]] < score[types[1]]) return types[1];
  };
  return scores.map(getHigherType).join('');
}
