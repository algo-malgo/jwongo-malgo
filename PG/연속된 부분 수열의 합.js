function solution(sequence, k) {
  let answer = null;
  let left = 0;
  let right = 0;
  let sum = sequence[0];

  while (left <= right) {
    if (sum === k) {
      if (answer) {
        if (answer[1] - answer[0] > right - left) {
          answer = [left, right];
        }
      } else {
        answer = [left, right];
      }
      sum -= sequence[left++];
      sum += sequence[++right];
    } else if (sum < k) {
      sum += sequence[++right];
    } else {
      sum -= sequence[left++];
    }
  }

  return answer;
}
