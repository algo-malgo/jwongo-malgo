function solution(book_time) {
  const getMinutes = (timeString) => {
    const [hour, minutes] = timeString.split(':').map(Number);
    return hour * 60 + minutes;
  };
  const sortedBookTime = book_time
    .map(([start, end]) => ({ start: getMinutes(start), end: getMinutes(end) }))
    .sort((a, b) => a.start - b.start);

  let answer = 0;
  const rooms = [];

  sortedBookTime.forEach((time) => {
    const emptyRoomIndex = rooms.findIndex((room) => room.end + 10 <= time.start);

    if (emptyRoomIndex > -1) {
      rooms[emptyRoomIndex] = time;
    } else {
      answer++;
      rooms.push(time);
    }
  });

  return answer;
}
