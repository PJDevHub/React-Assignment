// Create a React.js App to count the number of vowels in a given string.
import React, { useState } from 'react';

function App() {
  const [inputString, setInputString] = useState('');
  const [vowelCount, setVowelCount] = useState(0);

  const handleInputChange = (event) => {
    const input = event.target.value;
    setInputString(input);
    countVowels(input);
  };

  const countVowels = (str) => {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
    setVowelCount(count);
  };

  return (
    <div>
      <h1>Vowel in the below input are : </h1>
      <input type="text" value={inputString} onChange={handleInputChange}  />
      <p>Vowel count: {vowelCount}</p>
    </div>
  );
}

export default App;