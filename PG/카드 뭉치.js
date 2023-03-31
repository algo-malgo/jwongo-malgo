function solution(cards1, cards2, goal) {
  const getFront = (queue) => queue[0];

  for (const word of goal) {
    let isFound = false;
    while (cards1.length || cards2.length) {
      if (getFront(cards1) === word) {
        cards1.shift();
        isFound = true;
        break;
      }
      if (getFront(cards2) === word) {
        cards2.shift();
        isFound = true;
        break;
      }
      cards1.pop();
      cards2.pop();
    }
    if (!isFound) {
      return 'No';
    }
  }
  return 'Yes';
}
