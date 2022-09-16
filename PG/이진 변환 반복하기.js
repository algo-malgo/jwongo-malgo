function solution(s) {
  const answer = [0, 0];

  const zeroReg = new RegExp('0', 'g');

  while (s !== '1') {
    answer[0]++;
    const zero = s.match(zeroReg);
    if (zero) answer[1] += zero.length;
    s = s.replace(zeroReg, '').length.toString(2);
  }

  return answer;
}
