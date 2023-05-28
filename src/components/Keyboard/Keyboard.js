import React from 'react';
import { checkGuess } from '../../game-helpers';

const letters = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
];

function Keyboard({ guessesList, answer }) {
  const usedLetters = guessesList
    .map((guess) => checkGuess(guess, answer))
    .flat();

  const getLettersStatus = () => {
    const statusObj = {};
    usedLetters.forEach(({ letter, status }) => (statusObj[letter] = status));
    return statusObj;
  };

  const statusByLetter = getLettersStatus();

  return (
    <div className='keyboard'>
      {letters.map((row, index) => (
        <div className='row' key={index}>
          {row.map((letter, index) => {
            console.log(
              statusByLetter[letter.toUpperCase()],
              letter.toUpperCase()
            );
            return (
              <div
                key={index}
                className={`letter ${
                  statusByLetter[letter.toUpperCase()] || ''
                }`}>
                {letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
