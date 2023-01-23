function solution(numbers) {
  const answer = [];
  numbers.forEach((number) => {
    const bits = ('0' + number.toString(2)).split('').reverse();
    let index = 0;
    while (index <= bits.length) {
      if (bits[index] === '0') {
        bits[index] = '1';
        if (index > 0) {
          bits[index - 1] = '0';
        }
        break;
      }
      index++;
    }
    answer.push(parseInt(bits.reverse().join(''), 2));
  });
  return answer;
}
