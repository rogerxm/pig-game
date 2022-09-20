'use strict';

// Seleccion de elementos
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0; // 0 = Player 0, 1 = Player 1

// Generando un numero aleatorio para el dado
btnRoll.addEventListener('click', function () {
  // Numero aleatorio para el dado
  const dice = Math.trunc(Math.random() * 6 + 1);
  console.log(dice);

  // Mostrando el dado en la pantalla
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // Validando que el dado sea 1: si es true, cambia al Player 2
  if (dice !== 1) {
    currentScore += dice;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
