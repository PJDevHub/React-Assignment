// Create a React.js App to count the frequency of each character in a string.
import React, { useState } from 'react';

function App() {
  const [inputString, setInputString] = useState('');
  const [characterFrequency, setCharacterFrequency] = useState({});

  const handleInputChange = (event) => {
    const inputStringValue = event.target.value;
    setInputString(inputStringValue);
    countCharacterFrequency(inputStringValue);
  };

  const countCharacterFrequency = (str) => {
    const frequency = {};
    for (let char of str) {
      if (frequency[char]) {
        frequency[char]++;
      } else {
        frequency[char] = 1;
      }
    }
    setCharacterFrequency(frequency);
  };

  return (
    <div>
      <input type="text" value={inputString} onChange={handleInputChange} />
      <h2>Character Frequency:</h2>
      <ul>
        {Object.keys(characterFrequency).map((char, index) => (
          <li key={index}>
            {char}: {characterFrequency[char]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;