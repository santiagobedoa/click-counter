import React from 'react';
import '../stylessheets/Button.css';

function Boton({ text, isClickButton, clickHandler }) {
  return (
    <button
      className={isClickButton ? 'click-button' : 'clear-button'}
      onClick={clickHandler}>
      {text}
    </button>
  );
}

export default Boton;