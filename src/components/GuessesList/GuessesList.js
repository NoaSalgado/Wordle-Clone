import React from 'react';

import Guess from '../Guess/Guess';

import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessesList({ guessesList, answer }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((number) => {
        return (
          <Guess key={number} value={guessesList[number]} answer={answer} />
        );
      })}
    </div>
  );
}

export default GuessesList;
