const solution = (grades) => {
  return grades
    .sort((a, b) => {
      // console.log('compare', a, b);
      if (a[1] === b[1] && a[2] === b[2] && a[3] === b[3]) {
        // console.log('1', a[0] < b[0], a[0] > b[0]);
        if (a[0] < b[0]) {
          return -1;
        }
        if (a[0] > b[0]) {
          return 1;
        }
        return 0;
      }
      if (a[1] === b[1] && a[2] === b[2]) {
        // console.log('2', b[3] - a[3]);
        return b[3] - a[3];
      }
      if (a[1] === b[1]) {
        // console.log('3', b[2] - a[2]);
        return a[2] - b[2];
      }
      // console.log('4', b[1] - a[1]);
      return b[1] - a[1];
    })
    .map((grade) => grade[0])
    .join('\n');
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...lines] = inputs;

console.log(solution(lines.map((line) => line.split(' ').map((el) => (isNaN(+el) ? el : +el)))));
