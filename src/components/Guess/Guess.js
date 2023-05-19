import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer, checkIfUserWins }) {
  const checkedLetters = checkGuess(value, answer);

  return (
    <p className='guess'>
      {range(5).map((number) => (
        <span
          className={`cell ${
            checkedLetters ? checkedLetters[number].status : ''
          }`}
          key={number}>
          {value ? value[number] : ''}
        </span>
      ))}
    </p>
  );
}

export default Guess;
