//Create a React.js App to check if a string is a palindrome.
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(false);

  const handleInputChange = (event) => {    //arrow function 
    setInput(event.target.value);
  };

  const checkPalindrome = () => {
    const reversedInput = input.split('').reverse().join('');
    setIsPalindrome(input === reversedInput);
  };

  return (
    <div>
      <h1>Palindrome Checker</h1>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={checkPalindrome}>Check Palindrome</button>
      <p>{isPalindrome ? 'The string is a palindrome.' : 'The string is not a palindrome.'}</p>
    </div>
  );
}

export default App;