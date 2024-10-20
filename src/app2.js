// Create a React.js App to find the largest of three numbers
import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState(0);
  const [ num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [largest, setLargest] = useState(0);

  const findLargest = () => {
    const numbers = [num1, num2, num3];
    const largestNum = Math.max(...numbers);
    setLargest(largestNum);
  };

  return (
    <div>
      <h1>Find the Largest of Three Numbers</h1>
      <input type="number" value={num1} onChange={(e) => setNum1(parseInt(e.target.value))} />
      <input type="number" value={num2} onChange={(e) => setNum2(parseInt(e.target.value))} />
      <input type="number" value={num3} onChange={(e) => setNum3(parseInt(e.target.value))} />
      <button onClick={findLargest}>Find Largest</button>
      <p>Largest Number: {largest}</p>
    </div>
  );
}

export default App;