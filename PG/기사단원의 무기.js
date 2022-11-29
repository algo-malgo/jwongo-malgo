function solution(number, limit, power) {
  let answer = 0;

  const getSubmultipleCount = (number) => {
    let count = 0;
    for (let i = 0; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        count++;
        if (i !== number / i) count++;
      }
    }
    return count;
  };

  for (let i = 1; i <= number; i++) {
    const count = getSubmultipleCount(i);
    if (count > limit) {
      answer += power;
    } else {
      answer += count;
    }
  }

  return answer;
}
