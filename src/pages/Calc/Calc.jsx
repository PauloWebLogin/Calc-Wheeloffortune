import { useState } from 'react';
import './Calc.css';

function Calc() {
  const [markedNumbers, setMarkedNumbers] = useState('');
  const [result, setResult] = useState('');
  const [isOn, setIsOn] = useState(true);

  const handleClick = (value) => {
    if (isOn) {
      if (value === '=') {
        calculateResult();
      } else if (value === 'C') {
        clearNumbers();
      } else {
        setMarkedNumbers((prevNumbers) => prevNumbers + value);
      }
    }
  };

  const calculateResult = () => {
    try {
      const calculatedResult = eval(markedNumbers);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clearNumbers = () => {
    setMarkedNumbers('');
    setResult('');
  };

  const generateNumericButtons = () => {
    const numbers = Array.from({ length: 10 }, (_, i) => i);
    return numbers.map((number) => (
      <button key={number} onClick={() => handleClick(number)}>
        {number}
      </button>
    ));
  };

  const handleTogglePower = () => {
    setIsOn((prevIsOn) => !prevIsOn);
    setMarkedNumbers('');
    setResult('');
  };

  return (
    <div className="contain">
      <div className="calc">{isOn && (result !== '' ? result : markedNumbers)}</div>
      <br />
      <div className="button-container">
        <button className="button" onClick={() => handleClick('+')} disabled={!isOn}>
          +
        </button>
        <button className="button" onClick={() => handleClick('-')} disabled={!isOn}>
          -
        </button>
        <button className="button" onClick={() => handleClick('*')} disabled={!isOn}>
          *
        </button>
        <button className="button" onClick={() => handleClick('/')} disabled={!isOn}>
          /
        </button>
        <button className="button" onClick={clearNumbers} disabled={!isOn}>
          C
        </button>
        <button className="button" onClick={() => handleClick('=')} disabled={!isOn}>
          =
        </button>
        <button className="button" onClick={handleTogglePower}>
          {isOn ? 'Off' : 'On'}
        </button>
      </div>
      <br />
      <div className="button-container number-buttons">{generateNumericButtons()}</div>
    </div>
  );
}

export default Calc;
