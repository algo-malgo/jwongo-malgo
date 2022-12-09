function solution(s, n) {
  return s
    .split('')
    .map((char) => {
      if (char === ' ') return char;
      let code = char.charCodeAt();
      let isSmall = true;
      if (code < 97) {
        isSmall = false;
        code += 32;
      }
      code += n;
      if (code > 122) code -= 26;
      const newChar = String.fromCharCode(code);
      return isSmall ? newChar : newChar.toUpperCase();
    })
    .join('');
}
