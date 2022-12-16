function solution(s) {
  const split = (string) => {
    const x = string[0];
    let xCount = 1;
    let differentCount = 0;
    for (let i = 1; i < string.length; i++) {
      if (string[i] === x) {
        xCount++;
      } else {
        differentCount++;
      }
      if (xCount === differentCount) {
        return string.slice(i + 1);
      }
    }
    return '';
  };

  let answer = 0;
  while (s.length) {
    answer++;
    s = split(s);
  }
  return answer;
}
