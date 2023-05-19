import React, { useState } from 'react';

import GuessesList from '../GuessesList/GuessesList';
import InputGuess from '../InputGuess/InputGuess';
import Banner from '../Banner/Banner';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.log(answer);

function Game() {
  const [guessesList, setGuessesList] = useState([]);
  const [numGuesses, setNumGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState('running');

  function addGuess(newGuess) {
    const nextGuesses = [...guessesList, newGuess];
    setGuessesList(nextGuesses);

    if (newGuess === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  function incrementNumGuesses() {
    setNumGuesses(numGuesses + 1);
  }

  return (
    <>
      <GuessesList guessesList={guessesList} answer={answer} />
      <InputGuess
        addGuess={addGuess}
        incrementNumGuesses={incrementNumGuesses}
        numGuesses={numGuesses}
      />

      {gameStatus !== 'running' && (
        <Banner status={gameStatus} numGuesses={numGuesses} answer={answer} />
      )}
    </>
  );
}

export default Game;
