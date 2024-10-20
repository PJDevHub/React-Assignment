// Create a React.js App to calculate the factorial of a number using recursion.
import React, { useState } from 'react';

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function Factorial() {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);

  const handleCalculate = () => {
    setResult(factorial(number));
  };

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={handleCalculate}>Calculate</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default Factorial;