function solution(n, times) {
  times.sort((a, b) => a - b);
  let start = times[0];
  let end = Math.max(...times) * n;
  let middle = Math.floor((start + end) / 2);
  let answer = middle;

  while (start <= end) {
    let people = 0;
    for (const time of times) {
      people += Math.floor(middle / time);
    }
    if (people < n) {
      start = middle + 1;
      middle = Math.floor((start + end) / 2);
    } else {
      end = middle - 1;
      answer = middle;
      middle = start + Math.floor((end - start) / 2);
    }
  }

  return answer;
}
