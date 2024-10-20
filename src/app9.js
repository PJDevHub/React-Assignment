// Create a React.js App to print all prime numbers between 1 and 100.
import React, { useState, useEffect } from 'react';

function PrimeNumbers() {
  const [primeNumbers, setPrimeNumbers] = useState([]);

  useEffect(() => {
    const getPrimeNumbers = () => {
      const primeNums = [];
      for (let i = 2; i <= 100; i++) {
        let isPrime = true;
        for (let j = 2; j * j <= i; j++) {
          if (i % j === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          primeNums.push(i);
        }
      }
      setPrimeNumbers(primeNums);
    };
    getPrimeNumbers();
  }, []);

  return (
    <div>
      <h1>Prime Numbers between 1 and 100:</h1>
      <ul>
        {primeNumbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default PrimeNumbers;