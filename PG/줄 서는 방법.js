function solution(n, k) {
  const factorial = (number) => {
    let result = 1;
    for (let i = number; i > 1; i--) {
      result *= i;
    }
    return result;
  };

  const answer = [];
  const people = Array(n)
    .fill(1)
    .map((val, idx) => val + idx);

  for (let i = n; i > 0; i--) {
    const sectionSize = factorial(i - 1);
    const sectionIndex = Math.ceil(k / sectionSize);
    answer.push(people.splice(sectionIndex - 1, 1)[0]);
    k %= sectionSize;
  }

  return answer;
}
