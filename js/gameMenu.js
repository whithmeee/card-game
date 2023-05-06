import { startGame } from './startGame.js';

export const createGameMenu = () => {
  const title = document.createElement('h2');
  const gameSelection = document.querySelector('.game-selection__container');

  gameSelection.innerHTML = '';
  title.textContent = 'Выбор сложнсти';
  title.classList.add('game-menu__title');

  document.querySelector('.confetti').innerHTML = '';

  const createDiffculButton = (diffuclt) => {
    const button = document.createElement('button');
    button.classList.add('game-menu__diffucult-btn');
    button.textContent = `${diffuclt} карт`;

    button.addEventListener('click', () => startGame(diffuclt));

    return button;
  };
  gameSelection.append(
    title,
    createDiffculButton(10),
    createDiffculButton(12),
    createDiffculButton(14),
    createDiffculButton(16),
  );
};

createGameMenu();
