function solution(food) {
  let order = [];
  food.forEach((f, idx) => {
    if (f % 2 === 1) food[idx]--;
    if (food[idx] > 0) {
      order.push(idx.toString().repeat(food[idx] / 2));
    }
  });
  return order.join('') + '0' + order.reverse().join('');
}
