import React, { useState } from 'react';

const GeneralFormulaCalc: React.FC = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [c, setC] = useState<number>(0);
  const [solution, setSolution] = useState<string>('');

  const calculateFormula = () => {
    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      setSolution(`The solutions are x1 = ${x1} and x2 = ${x2}`);
    } else if (discriminant === 0) {
      const x = -b / (2 * a);
      setSolution(`The solution is x = ${x}`);
    } else {
      setSolution('The equation has no real solutions');
    }
  };

  return (
    <div className='container'>
      <h2>Quadratic Equation Solver</h2>
      <div>
        <label>
          Enter the value of a:
          <input type="number" value={a} onChange={(e) => setA(Number(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Enter the value of b:
          <input type="number" value={b} onChange={(e) => setB(Number(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Enter the value of c:
          <input type="number" value={c} onChange={(e) => setC(Number(e.target.value))} />
        </label>
      </div>
      <button onClick={calculateFormula}>Calculate</button>
      <div>{solution}</div>
    </div>
  );
};

export default GeneralFormulaCalc;