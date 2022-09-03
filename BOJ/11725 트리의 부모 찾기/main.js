const solution = (edges) => {
  const tree = ['', { parent: null, degree: 1 }];
  edges.forEach((edge) => {
    let parent = edge[0];
    let child = edge[1];
    if (tree[edge[1]]) [parent, child] = [child, parent];
    tree[child] = { parent: parent, degree: tree[parent].degree + 1 };
  });
  console.log(
    tree.reduce((acc, curr) =>
      curr.parent ? acc.concat(`${curr.parent}\n`) : acc
    )
  );
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...lines] = inputs;

solution(lines.map((line) => line.split(' ').map(Number)));
