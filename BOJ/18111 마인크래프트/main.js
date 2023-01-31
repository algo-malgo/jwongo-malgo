const solution = (B, site) => {
  let result = [];
  const flatSite = site.flat();
  flatSite.sort((a, b) => b - a);
  for (let height = 256; height >= 0; height--) {
    let inventory = B;
    let time = 0;
    let index = 0;
    for (; index < flatSite.length; index++) {
      if (height < flatSite[index]) {
        const removed = flatSite[index] - height;
        inventory += removed;
        time += removed * 2;
      } else {
        const added = height - flatSite[index];
        inventory -= added;
        time += added;
        if (inventory < 0) {
          break;
        }
      }
    }
    if (index < flatSite.length) {
      continue;
    } else {
      result.push([time, height]);
    }
  }
  result.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }
    return a[0] - b[0];
  });
  return result[0].join(' ');
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [NMB, ...lines] = inputs;

console.log(
  solution(
    +NMB.split(' ')[2],
    lines.map((line) => line.split(' ').map(Number))
  )
);
