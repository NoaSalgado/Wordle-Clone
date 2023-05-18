import React, { useState } from 'react';

function InputGuess() {
  const [guess, setGuess] = useState('');

  function handleChange(e) {
    setGuess(e.target.value.toUpperCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(guess);
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
        value={guess}
        onChange={handleChange}
      />
    </form>
  );
}

export default InputGuess;
