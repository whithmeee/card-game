import { createIconsArray, dublicateArray, shuffle } from './utils.js';
import { createGameCard } from './gameCard.js';
import { confetti } from './confetti.js';
import { createGameMenu } from './gameMenu.js';

export const startGame = (diffuclt) => {
  let firtsCard = null;
  let secondCard = null;
  let clickabl = true;

  const gameSelection = document.querySelector('.game-selection__container');
  const gameTable = document.createElement('div');
  const cardsIcons = createIconsArray(diffuclt);
  const duplicatedCardsIcons = dublicateArray(cardsIcons);
  const restartButton = document.createElement('button');

  gameSelection.innerHTML = '';
  restartButton.innerHTML = 'Рестарт';
  gameTable.classList.add('game-table');
  restartButton.classList.add('restart-btn');
  shuffle(duplicatedCardsIcons);

  duplicatedCardsIcons.forEach((icon) => {
    gameTable.append(createGameCard('question-circle', icon));
  });

  gameSelection.append(gameTable, restartButton);

  const cards = document.querySelectorAll('.game-card');

  restartButton.addEventListener('click', () => {
    createGameMenu();
  });
  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      if (clickabl == true && !card.classList.contains('successfully')) {
        card.classList.add('flip');

        if (firtsCard == null) {
          firtsCard = index;
        } else {
          if (index != firtsCard) {
            secondCard = index;
            clickabl = false;
          }
        }

        if (firtsCard != null && secondCard != null && firtsCard != secondCard) {
          if (
            cards[firtsCard].firstElementChild.className ===
            cards[secondCard].firstElementChild.className
          ) {
            setTimeout(() => {
              cards[firtsCard].classList.add('successfully');
              cards[secondCard].classList.add('successfully');

              firtsCard = null;
              secondCard = null;
              clickabl = true;
            }, 500);
          } else {
            setTimeout(() => {
              cards[firtsCard].classList.remove('flip');
              cards[secondCard].classList.remove('flip');

              firtsCard = null;
              secondCard = null;
              clickabl = true;
            }, 500);
          }
        }
      }

      if (Array.from(cards).every((card) => card.className.includes('flip'))) {
        document.querySelector('.confetti').innerHTML = confetti;
      }
    });
  });
};
