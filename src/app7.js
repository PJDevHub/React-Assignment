import React, { useState } from 'react';


const ReverseNumber = () => {
  const [number, setNumber] = useState('');
  const [reversedNumber, setReversedNumber] = useState('');

  const handleInputChange = (event) => {
    setNumber(event.target.value);
  };

  const handleReverse = () => {
    const reversed = number.split('').reverse().join('');
    setReversedNumber(reversed);
  };

  return (
    <div>
      <input type="number" value={number} onChange={handleInputChange} />
      <button onClick={handleReverse}>Reverse</button>
      <p>Reversed number: {reversedNumber}</p>
    </div>
  );
};

export default ReverseNumber;