import React, { useState } from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function InputGuess({ addGuess, incrementNumGuesses, numGuesses }) {
  const [guess, setGuess] = useState('');

  function handleChange(e) {
    setGuess(e.target.value.toUpperCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    addGuess(guess);
    incrementNumGuesses();
    setGuess('');
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        type='text'
        id='guess-input'
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        disabled={numGuesses === NUM_OF_GUESSES_ALLOWED}
        value={guess}
        onChange={handleChange}
      />
    </form>
  );
}

export default InputGuess;
