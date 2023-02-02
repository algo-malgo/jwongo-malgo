function solution(word) {
  const dictionary = [];
  const VOWELS = ['A', 'E', 'I', 'O', 'U'];

  const dfs = (word, length) => {
    if (length === word.length) {
      dictionary.push(word);
      return;
    }
    VOWELS.forEach((vowel) => {
      dfs(word + vowel, length);
    });
  };

  for (let i = 1; i <= 5; i++) dfs('', i);

  return dictionary.sort().indexOf(word) + 1;
}
