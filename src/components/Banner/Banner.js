import React from 'react';

function Banner({ status, answer, numGuesses }) {
  return (
    <div className={`${status === 'won' ? 'happy' : 'sad'} banner`}>
      {status === 'won' ? (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {numGuesses} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
