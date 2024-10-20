// Create a React.js App to check if a number is even or odd.
import React, { useState } from 'react';

function EvenOddApp() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (event) => {
    setNumber(event.target.value);
  };

  const checkEvenOdd = () => {
    const num = parseInt(number, 10);
    if (num % 2 === 0) {
      setResult(`${num} is even.`);
    } else {
      setResult(`${num} is odd.`);
    }
  };

  return (
    <div>
      <h1>Even or Odd Checker</h1>
      <input type="number" value={number} onChange={handleInputChange} />
      <button onClick={checkEvenOdd}>Check</button>
      <p>{result}</p>
    </div>
  );
}

export default EvenOddApp;