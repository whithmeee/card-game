export const createGameCard = (defaulticon, flippedCardion) => {
  const card = document.createElement('div');
  card.classList.add('game-card');

  const notFilppedCardI = document.createElement('i');
  const flippedCardI = document.createElement('i');

  notFilppedCardI.classList.add('fa', `fa-${defaulticon}`);
  flippedCardI.classList.add('fa', `fa-${flippedCardion}`);

  card.append(flippedCardI, notFilppedCardI);

  return card;
};
