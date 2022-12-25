function solution(elements) {
  const answer = new Set();
  for (let length = 1; length <= elements.length; length++) {
    for (let i = 0; i < elements.length; i++) {
      const progression =
        i + length < elements.length
          ? elements.slice(i, i + length)
          : elements
              .slice(i)
              .concat(elements.slice(0, elements.length - length));
      answer.add(progression.reduce((acc, curr) => acc + curr, 0));
    }
  }
  return answer.size;
}
