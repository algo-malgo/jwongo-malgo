function solution(files) {
  const forCompareFiles = files.map((file, index) => {
    const number = file.match(/[0-9]{1,5}/);
    return {
      head: file.slice(0, number.index).toUpperCase(),
      number: +number,
      index: index,
    };
  });
  forCompareFiles.sort((a, b) => {
    if (a.head < b.head) return -1;
    if (a.head > b.head) return 1;
    if (a.number < b.number) return -1;
    if (a.number > b.number) return 1;
    return a.index - b.index;
  });
  return forCompareFiles.map((file) => files[file.index]);
}
