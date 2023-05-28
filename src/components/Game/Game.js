import React, { useState } from 'react';

import GuessesList from '../GuessesList/GuessesList';
import InputGuess from '../InputGuess/InputGuess';
import Keyboard from '../Keyboard/Keyboard';
import Banner from '../Banner/Banner';
import Button from '../Button/Button';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  const [guessesList, setGuessesList] = useState([]);
  const [numGuesses, setNumGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState('running');

  console.log(answer);

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

  function restartGame() {
    setAnswer(sample(WORDS));
    setGuessesList([]);
    setNumGuesses(0);
    setGameStatus('running');
  }

  return (
    <>
      <GuessesList guessesList={guessesList} answer={answer} />
      <InputGuess
        addGuess={addGuess}
        incrementNumGuesses={incrementNumGuesses}
        numGuesses={numGuesses}
      />
      <Keyboard guessesList={guessesList} answer={answer} />

      {gameStatus !== 'running' && (
        <>
          <Banner status={gameStatus} numGuesses={numGuesses} answer={answer} />
          <Button handleCick={restartGame}>Restart Game</Button>
        </>
      )}
    </>
  );
}

export default Game;
