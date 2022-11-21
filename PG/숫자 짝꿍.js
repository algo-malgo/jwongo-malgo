function solution(X, Y) {
  const numbers = [];
  const strX = X.toString();
  for (const char of strX) {
    numbers[+char] = numbers[+char] + 1 || 1;
  }
  const strY = Y.toString();
  const common = [];
  for (const char of strY) {
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
