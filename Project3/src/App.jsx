import React, { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Simple Calculator</h2>
      <div className="mb-3">
        <input type="text" className="form-control text-end" value={input} readOnly />
      </div>
      <div className="d-grid gap-2">
        <div className="row g-2">
          {['7', '8', '9', '/'].map((btn) => (
            <div className="col-3" key={btn}>
              <button className="btn btn-secondary w-100" onClick={() => handleClick(btn)}>{btn}</button>
            </div>
          ))}
        </div>
        <div className="row g-2">
          {['4', '5', '6', '*'].map((btn) => (
            <div className="col-3" key={btn}>
              <button className="btn btn-secondary w-100" onClick={() => handleClick(btn)}>{btn}</button>
            </div>
          ))}
        </div>
        <div className="row g-2">
          {['1', '2', '3', '-'].map((btn) => (
            <div className="col-3" key={btn}>
              <button className="btn btn-secondary w-100" onClick={() => handleClick(btn)}>{btn}</button>
            </div>
          ))}
        </div>
        <div className="row g-2">
          {['0', '.', '=', '+'].map((btn) => (
            <div className="col-3" key={btn}>
              <button
                className={`btn ${btn === '=' ? 'btn-success' : 'btn-secondary'} w-100`}
                onClick={btn === '=' ? handleCalculate : () => handleClick(btn)}
              >
                {btn}
              </button>
            </div>
          ))}
        </div>
        <button className="btn btn-danger mt-2" onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default App;
