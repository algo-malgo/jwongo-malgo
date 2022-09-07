const solution = (initialString, commands) => {
  let sentence = initialString;
  let cursor = sentence.length;
  commands.forEach((command) => {
    switch (command[0]) {
      case 'L':
        if (cursor) cursor--;
        break;
      case 'D':
        if (cursor < sentence.length) cursor++;
        break;
      case 'B':
        if (cursor) {
          if (cursor === sentence.length)
            sentence = sentence.slice(0, cursor - 1);
          else
            sentence =
              sentence.slice(0, cursor - 1) +
              sentence.slice(cursor, sentence.length);
          cursor--;
        }
        break;
      case 'P':
        if (cursor === sentence.length) sentence = sentence + command[2];
        else
          sentence =
            sentence.slice(0, cursor) +
            command[2] +
            sentence.slice(cursor, sentence.length);
        cursor++;
        break;
    }
  });
  return sentence;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');
const [initialString, M, ...commands] = lines;

console.log(solution(initialString, commands));
