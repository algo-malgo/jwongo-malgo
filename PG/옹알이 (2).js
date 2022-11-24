function solution(babbling) {
  const words = ['aya', 'ye', 'woo', 'ma'];
  let answer = 0;

  babbling.forEach((babb) => {
    words.forEach((word) => {
      let idx = babb.indexOf(word);
      while (idx > -1) {
        if (babb.slice(idx + word.length, idx + word.length * 2) !== word) {
          babb = babb.replace(word, '_');
          idx = babb.indexOf(word);
        } else break;
      }
    });
    if (!babb.replace(new RegExp('_', 'g'), '').length) answer++;
  });
  return answer;
}
