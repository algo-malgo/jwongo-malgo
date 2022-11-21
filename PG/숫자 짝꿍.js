function solution(X, Y) {
  const numbers = [];
  const strX = X.toString();
  for (const char of strX) {
    numbers.push(char);
  }
  const strY = Y.toString();
  const common = [];
  for (const char of strY) {
    const idx = numbers.indexOf(char);
    if (idx > -1) {
      numbers.splice(idx, 1);
      common.push(char);
    }
  }
  if (!common.length) return '-1';
  common.sort((a, b) => b - a);
  if (common[0] === '0') return common[0];
  return common.join('');
}
