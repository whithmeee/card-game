export const dublicateArray = (array) =>
  array.reduce((res, current) => res.concat([current, current]), []);

export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

export const createIconsArray = (initialCount) => {
  const cardsIcons = [
    'compass',
    'cload',
    'play',
    'bolt',
    'stop',
    'cogs',
    'atom',
    'basketball-ball',
  ];

  switch (initialCount) {
    case 10:
      return cardsIcons.slice(0, 5);
    case 12:
      return cardsIcons.slice(0, 6);
    case 14:
      return cardsIcons.slice(0, 7);
    case 16:
      return cardsIcons;
    default:
      break;
  }
};
