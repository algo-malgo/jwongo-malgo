const solution = (N) => {
  const getDigit3hansus = (n) => {
    const hansus = [+n.toString().repeat(3)];
    for (let i = n - 1; i > 0; i--) {
      if (i - (n - i) < 0) break;
      hansus.push(+`${n}${i}${i - (n - i)}`);
    }
    for (let i = n + 1; i <= 9; i++) {
      if (i + (i - n) > 9) break;
      hansus.push(+`${n}${i}${i + (i - n)}`);
    }
    hansus.sort((a, b) => a - b);
    return hansus;
  };
  switch (N.length) {
    case 4:
      return 144;
    case 3:
      const hansus = getDigit3hansus(+N[0]);
      let rest = 0;
      for (let i = 1; i < 5; i++) {
        if (+N >= hansus[i - 1] && +N < hansus[i]) rest = i;
      }
      if (hansus[4] <= +N) rest = 5;
      return 99 + (+N[0] - 1) * 5 + rest;
    case 2:
      return 9 + (+N[0] - 1) * 10 + +N[1] + 1;
    case 1:
      return +N;
  }
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const N = fs.readFileSync(file).toString().trim();

console.log(solution(N));
