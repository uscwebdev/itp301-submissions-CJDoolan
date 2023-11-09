import React from 'react';
import { useState } from 'react';

export default function CountButton() {
  const [count, setCount] = useState(0);

  function handlePosIncrementCount() {
    setCount(count + 1);
  }

  function handleNegIncrementCount() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(count);
    }
  }

  return (
    <div id="count-section" className="container mt-4">
      <p>
        <button id="btn-click" onClick={handleNegIncrementCount}>
          -
        </button>
        {count}
        <button id="btn-click" onClick={handlePosIncrementCount}>
          +
        </button>
      </p>
    </div>
  );
}
