function solution(phone_book) {
  const set = new Set();
  phone_book.forEach((phone) => {
    set.add(phone);
  });
  for (const phone of phone_book) {
    let isPrefix = false;
    for (let i = 0; i < phone.length; i++) {
      if (set.has(phone.slice(0, i))) {
        isPrefix = true;
        break;
      }
    }
    if (isPrefix) {
      return false;
    }
  }
  return true;
}
