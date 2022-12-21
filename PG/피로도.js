function solution(k, dungeons) {
  let answer = -1;

  const getPermutations = (array, numberToSelect) => {
    const results = [];
    if (numberToSelect === 1) return array.map((el) => [el]);

    array.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const restPermutations = getPermutations(rest, numberToSelect - 1);
      results.push(...restPermutations.map((el) => [fixed, ...el]));
    });

    return results;
  };

  const getPossibleDungeonCount = (array) => {
    let tiredness = k;
    let count = 0;
    array.forEach((dungeon) => {
      if (tiredness >= dungeon[0] && tiredness - dungeon[1] >= 0) {
        tiredness -= dungeon[1];
        count++;
      }
    });
    return count;
  };

  const permutations = getPermutations(dungeons, dungeons.length);
  permutations.forEach((permutation) => {
    const possibleDungeonCount = getPossibleDungeonCount(permutation);
    answer = Math.max(possibleDungeonCount, answer);
  });

  return answer;
}
