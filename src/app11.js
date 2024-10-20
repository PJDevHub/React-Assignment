// Create a React.js App to check if a number is a palindrome.
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [result , setResult] = useState('');

  const handleCheckPalindrome = () => {
    const num = parseInt(input);
    const reversedNum = parseInt(input.toString().split('').reverse().join(''));
    if (num === reversedNum) {
      setResult(`${input} is a palindrome`);
    } else {
      setResult(`${input} is not a palindrome`);
    }
  };


  return (
    <div>
      <input type="number" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleCheckPalindrome}>Check Palindrome</button>
      <p>{result}</p>
    </div>
  );
}

export default App;