import React from 'react';
import '../stylessheets/Counter.css';

function Counter({ clickNum }) {
  return (
    <div className='counter'>
      {clickNum}
    </div>
  );
}

export default Counter;