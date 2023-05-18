import React, { useState } from 'react';

import GuessesList from '../GuessesList/GuessesList';
import InputGuess from '../InputGuess/InputGuess';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessesList, setGuessesList] = useState([]);

  function addGuess(guess) {
    const newGuess = {
      value: guess,
      id: crypto.randomUUID(),
    };
    setGuessesList([...guessesList, newGuess]);
  }

  return (
    <>
      <GuessesList guessesList={guessesList} />
      <InputGuess addGuess={addGuess} />
    </>
  );
}

export default Game;
