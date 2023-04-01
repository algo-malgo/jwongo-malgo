function solution(name, yearning, photo) {
  const map = new Map();
  name.forEach((thisName, index) => map.set(thisName, yearning[index]));
  return photo.map((thisPhoto) => thisPhoto.reduce((acc, curr) => acc + (map.get(curr) || 0), 0));
}
