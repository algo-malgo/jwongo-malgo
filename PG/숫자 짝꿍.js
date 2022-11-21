function solution(X, Y) {
  const numbers = [];
  for (const char of X) {
    numbers[+char] = numbers[+char] + 1 || 1;
  }
  const common = [];
  for (const char of Y) {
    if (numbers[+char]) {
      common.push(char);
      numbers[+char]--;
    }
  }
  if (!common.length) return '-1';
  common.sort((a, b) => b - a);
  if (common[0] === '0') return common[0];
  return common.join('');
}
