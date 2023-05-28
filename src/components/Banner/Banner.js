import React, { useEffect, useState } from 'react';

function Banner({ status, answer, numGuesses }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);

  if (show) {
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
  } else {
    return null;
  }
}

export default Banner;
