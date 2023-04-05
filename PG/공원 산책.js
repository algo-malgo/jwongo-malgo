function solution(park, routes) {
  const initCursor = () => {
    for (let i = 0; i < park.length; i++) {
      const startY = park[i].indexOf('S');
      if (startY > -1) {
        return [i, startY];
      }
    }
  };

  const check = (x, y) => {
    if (!park[x] || !park[x][y] || park[x][y] === 'X') {
      return false;
    }
    return true;
  };

  let cursor = initCursor();

  routes.forEach((route) => {
    const [op, n] = route.split(' ').map((el, index) => (index === 1 ? +el : el));
    let count;
    switch (op) {
      case 'N':
        count = 1;
        for (; count <= n; count++) {
          if (!check(cursor[0] - count, cursor[1])) {
            break;
          }
        }
        if (count > n) {
          cursor[0] = cursor[0] - n;
        }
        break;
      case 'S':
        count = 1;
        for (; count <= n; count++) {
          if (!check(cursor[0] + count, cursor[1])) {
            break;
          }
        }
        if (count > n) {
          cursor[0] = cursor[0] + n;
        }
        break;
      case 'W':
        count = 1;
        for (; count <= n; count++) {
          if (!check(cursor[0], cursor[1] - count)) {
            break;
          }
        }
        if (count > n) {
          cursor[1] = cursor[1] - n;
        }
        break;
      case 'E':
        count = 1;
        for (; count <= n; count++) {
          if (!check(cursor[0], cursor[1] + count)) {
            break;
          }
        }
        if (count > n) {
          cursor[1] = cursor[1] + n;
        }
        break;
    }
  });
  return cursor;
}
