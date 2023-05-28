import React from 'react';

function Button({ children, handleCick }) {
  return (
    <button className='btn' onClick={handleCick}>
      {children}
    </button>
  );
}

export default Button;
