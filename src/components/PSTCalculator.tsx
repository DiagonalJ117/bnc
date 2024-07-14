import React, { useState } from 'react';

const PerfectSquareTrinomialCalculator: React.FC = () => {
  const [a, setA] = useState<string>('');
  const [b, setB] = useState<string>('');
  const [result, setResult] = useState<string>('a x^2 + 2a x + b^2');

  const calculateTrinomial = (a: number, b: number): string => {
    const aSquared = Math.pow(a, 2);
    const doubleAB = 2 * a * b;
    const bSquared = Math.pow(b, 2);
    return `${aSquared}x^2 + ${doubleAB}x + ${bSquared}`;
  };

  const handleCalculate = () => {
    if (a && b) {
      const trinomialResult = calculateTrinomial(Number(a), Number(b));
      setResult(trinomialResult);
    }
  };

  return (
    <div className='container'>
      <h2>Perfect Square Trinomial Calculator</h2>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        placeholder="Enter value for a"
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
        placeholder="Enter value for b"
      />
      <button className='button-cyberpunk' onClick={handleCalculate}>Calculate</button>
      {result && <p>Result: {result}</p>}
    </div>
  );
};

export default PerfectSquareTrinomialCalculator;