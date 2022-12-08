function solution(s) {
  const reg = /\s+|[^\s]+/g;
  const split = s.match(reg);
  split.forEach((word, idx) => {
    if (word[0] === ' ') return;
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
      if (i % 2 === 0) {
        newWord = newWord + word[i].toUpperCase();
      } else {
        newWord = newWord + word[i].toLowerCase();
      }
    }
    split[idx] = newWord;
  });
  return split.join('');
}
