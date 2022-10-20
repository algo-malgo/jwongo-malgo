function solution(genres, plays) {
  const map = new Map();
  genres.forEach((genre, idx) => {
    if (map.get(genre)) {
      map.get(genre).push({ play: plays[idx], idx: idx });
    } else {
      map.set(genre, [{ play: plays[idx], idx: idx }]);
    }
  });

  let sortedGenres = [];
  for (const [key, value] of map) {
    sortedGenres.push([key, value.reduce((acc, curr) => acc + curr.play, 0)]);
  }
  sortedGenres = sortedGenres.sort((a, b) => b[1] - a[1]).map((val) => val[0]);

  const answer = [];
  sortedGenres.forEach((genre) => {
    map.get(genre).sort((a, b) => b.play - a.play);
    answer.push(
      map
        .get(genre)
        .map((val) => val.idx)
        .slice(0, 2)
    );
  });
  return answer.flat();
}
