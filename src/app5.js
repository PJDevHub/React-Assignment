//Create a React.js App to sum all the numbers in an array.
import React, { useState } from 'react';

function App() {
  const [numbers, setNumbers] = useState([]);
  const [input, setInput] = useState('');
  const [sum, setSum] = useState(0);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleAddNumber = () => {
    if (input !== '') {
      setNumbers([...numbers, parseInt(input)]);
      setInput('');
    }
  };

  const calculateSum = () => {
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    setSum(sum);
  };

  return (
    <div>
      <h1>Sum of Numbers in Array</h1>
      <input type="number" value={input} onChange={handleInputChange} />
      <button onClick={handleAddNumber}>Add Number</button>
      <p>Numbers: {numbers.join(', ')}</p>
      <button onClick={calculateSum}>Calculate Sum</button>
      <p>Sum: {sum}</p>
    </div>
  );
}

export default App;