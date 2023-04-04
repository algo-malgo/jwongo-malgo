function solution(today, terms, privacies) {
  const termMap = new Map();
  terms.forEach((term) => {
    const [type, period] = term.split(' ');
    termMap.set(type, +period);
  });

  const answer = [];

  const todayDate = new Date(...today.split('.'));

  privacies.forEach((privacy, index) => {
    const [date, type] = privacy.split(' ');
    let [year, month, day] = date.split('.').map(Number);
    month += termMap.get(type);
    if (month > 12) {
      const tempMonth = month;
      month = tempMonth % 12;
      year += Math.floor(tempMonth / 12);
    }
    if (new Date(year, month, day).getTime() <= todayDate.getTime()) {
      answer.push(index + 1);
    }
  });

  return answer;
}
