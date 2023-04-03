function solution(s, skips, index) {
  let charArray = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  charArray = charArray.filter((char) => {
    for (const skip of skips) {
      if (char === skip) {
        return false;
      }
    }
    return true;
  });

  const split = s.split('');
  return split
    .map((char) => {
      let charIndex = charArray.indexOf(char);
      const convertedIndex = charIndex + index;
      if (convertedIndex > charArray.length - 1) {
        return charArray[convertedIndex - charArray.length * Math.floor(convertedIndex / charArray.length)];
      }
      return charArray[convertedIndex];
    })
    .join('');
}
