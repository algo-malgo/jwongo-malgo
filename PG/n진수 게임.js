function solution(n, t, m, p) {
  let answer = '';
  let numbers = '';
  for (let i = 0; i < t * m; i++) {
    numbers += i.toString(n);
  }
  numbers = numbers.toUpperCase();
  for (let i = p - 1; i < t * m; i += m) {
    answer += numbers[i];
  }
  return answer;
}
