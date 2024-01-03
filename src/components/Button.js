import React from 'react';

const Button = ({ onClick, label }) => {
  return (
    <button id="button-id" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;