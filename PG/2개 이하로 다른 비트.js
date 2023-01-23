function solution(numbers) {
  const answer = [];

  numbers.forEach((number) => {
    const bits = number.toString(2).split('').reverse();
    let index = 0;
    let min = Number.MAX_SAFE_INTEGER;
    while (bits.length > index) {
      const convertedBits = [...bits];
      if (convertedBits[index] === '1') {
        convertedBits[index] = '0';
        const convertedNumber = parseInt('1' + convertedBits.reverse().join(''), 2);
        if (convertedNumber > number) {
          min = Math.min(convertedNumber, min);
        }
      } else {
        convertedBits[index] = '1';
        const convertedNumber = parseInt(convertedBits.reverse().join(''), 2);
        if (convertedNumber > number) {
          min = Math.min(convertedNumber, min);
        }
      }
      index++;
    }
    answer.push(min);
  });

  return answer;
}
