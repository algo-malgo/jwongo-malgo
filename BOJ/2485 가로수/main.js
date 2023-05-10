const solution = (numbers) => {
  const findGCD = (numbers) => {
    let gcd = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
      gcd = getGCD(gcd, numbers[i]);
    }

    return gcd;
  };

  const getGCD = (a, b) => {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }

    return a;
  };

  let answer = 0;

  const gaps = [];
  for (let i = 1; i < numbers.length; i++) {
    gaps.push(numbers[i] - numbers[i - 1]);
  }

  const gcd = findGCD(gaps);

  gaps.forEach((gap) => {
    answer += gap / gcd - 1;
  });

  return answer;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...numbers] = inputs;

console.log(solution(numbers.map(Number)));
