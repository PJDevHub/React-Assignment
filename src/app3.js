import React, { useState } from 'react';

function App3() {
  const [numbers, setNumbers] = useState([]);

  const printNumbers = () => {
    const numbersArray = Array.from({ length: 100 }, (_, i) => i + 1); // More efficient array creation
    setNumbers(numbersArray);
  };

  return (
    <div>
      <h1>Print Numbers from 1 to 100</h1>
      <button onClick={printNumbers}>Print Numbers</button>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li> // Use 'number' as key since it's unique
        ))}
      </ul>
    </div>
  );
}

export default App3;
