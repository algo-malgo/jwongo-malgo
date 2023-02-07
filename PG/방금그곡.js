function solution(m, musicInfos) {
  const NOTE_REG = /[A|B|C|D|E|F|G]#?/g;

  const rememberedMelody = m
    .match(NOTE_REG)
    .map((note) => {
      if (note.includes('#')) {
        return note.replace('#', '').toLowerCase();
      }
      return note;
    })
    .toString();

  const matchedMusicInfos = [];

  musicInfos.forEach((musicInfo) => {
    const [startTime, endTime, name, melodyString] = musicInfo.split(',');

    const [startHour, startSecond] = startTime.split(':');
    const [endHour, endSecond] = endTime.split(':');
    const startDate = new Date(1970, 0, 1, startHour, startSecond);
    const endDate = new Date(1970, 0, 1, endHour, endSecond);
    const playtime = (endDate.getTime() - startDate.getTime()) / 60000;

    let melodyArray = melodyString.match(NOTE_REG).map((note) => {
      if (note.includes('#')) {
        return note.replace('#', '').toLowerCase();
      }
      return note;
    });
    if (playtime > melodyArray.length) {
      let index = 0;
      let numberOfNotesToAdd = playtime - melodyArray.length;
      const newMelodyArray = [...melodyArray];
      while (numberOfNotesToAdd > 0) {
        if (index === melodyArray.length) {
          index = 0;
        }
        newMelodyArray.push(melodyArray[index]);
        index++;
        numberOfNotesToAdd--;
      }
      melodyArray = newMelodyArray;
    } else {
      melodyArray = melodyArray.slice(0, playtime);
    }
    const melody = melodyArray.toString();

    if (melody.includes(rememberedMelody)) {
      matchedMusicInfos.push({ name, playtime });
    }
  });

  if (matchedMusicInfos.length) {
    matchedMusicInfos.sort((a, b) => {
      if (a.playtime === b.playtime) {
        return a.name < b.name ? -1 : 1;
      }
      return b.playtime - a.playtime;
    });
    return matchedMusicInfos[0].name;
  }
  return '(None)';
}
