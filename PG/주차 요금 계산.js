function solution(fees, records) {
  const getMinutes = (time) => {
    const [hour, minute] = time.split(':').map(Number);
    return hour * 60 + minute;
  };

  const getFee = (minutes) => {
    if (minutes > fees[0])
      return fees[1] + Math.ceil((minutes - fees[0]) / fees[2]) * fees[3];
    else return fees[1];
  };

  const answer = [];
  const map = new Map();

  records.forEach((record) => {
    const [time, num, action] = record.split(' ');
    if (map.get(num) && map.get(num).action === 'IN')
      map.set(num, {
        time: time,
        action: action,
        minutes:
          map.get(num).minutes +
          (getMinutes(time) - getMinutes(map.get(num).time)),
      });
    else
      map.set(num, {
        time: time,
        action: action,
        minutes: map.get(num) ? map.get(num).minutes : 0,
      });
  });

  map.forEach((info, num) => {
    if (info.action === 'IN') {
      info = {
        ...info,
        minutes: info.minutes + (getMinutes('23:59') - getMinutes(info.time)),
      };
    }
    answer.push([num, getFee(info.minutes)]);
  });

  return Array.from(answer)
    .sort((a, b) => a[0] - b[0])
    .map((val) => val[1]);
}
