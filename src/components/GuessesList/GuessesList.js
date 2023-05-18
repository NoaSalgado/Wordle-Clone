import React from 'react';

function GuessesList({ guessesList }) {
  return (
    <div className='guess-results'>
      {guessesList.map((guess) => (
        <p key={guess.id} className='guess'>
          {guess.value}
        </p>
      ))}
    </div>
  );
}

export default GuessesList;
