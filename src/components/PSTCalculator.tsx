import React, { useState } from 'react';
import { homePageContent } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const PerfectSquareTrinomialCalculator: React.FC = () => {
  const { language } = useLanguage();
  const { resultLabel, pageDescription, inputLabels, calculateButton } = homePageContent as any;
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
      <h2>{pageDescription[language]}</h2>
      <input
        type="number"
        value={a}
        onChange={(e: any) => setA(e.target.value)}
        placeholder={inputLabels[language].a}
      />
      <input
        type="number"
        value={b}
        onChange={(e: any) => setB(e.target.value)}
        placeholder={inputLabels[language].b}
      />
      <button className='button-cyberpunk' onClick={handleCalculate}>{calculateButton[language]}</button>
      {result && <p>{resultLabel[language]}: {result}</p>}
    </div>
  );
};

export default PerfectSquareTrinomialCalculator;