import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState(''); // This controls the input field
  const [array, setArray] = useState([]);
  const [largest, setLargest] = useState(null);

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setInputValue(userInput); // Update the input field value
    const newArray = userInput.split(',').map(Number);
    setArray(newArray);
  };

  const findLargest = () => {
    if (array.length > 0) {
      const largestElement = Math.max(...array);
      setLargest(largestElement);
    } else {
      setLargest(null);
    }
  };

  return (
    <div>
      <h1>Largest Element in Array</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter array elements (comma separated)"
      />
      <button onClick={findLargest}>Find Largest</button>
      <p>Array: {array.join(', ')}</p>
      <p>Largest Element: {largest}</p>
    </div>
  );
}

export default App;
