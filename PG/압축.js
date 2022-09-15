function solution(msg) {
  const answer = [];
  const dictionary = new Map();
  let last = 26;

  for (let i = 65; i <= 90; i++) {
    dictionary.set(String.fromCharCode(i), i - 64);
  }

  for (let i = 0; i < msg.length; i++) {
    let str = msg[i];
    while (dictionary.get(str + msg[i + 1])) {
      str += msg[i + 1];
      i++;
    }
    answer.push(dictionary.get(str));
    if (i + 1 < msg.length) {
      last++;
      dictionary.set(str + msg[i + 1], last);
    }
  }

  return answer;
}
