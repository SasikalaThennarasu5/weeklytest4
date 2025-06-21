import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  return (
    <div className="container text-center mt-5">
      <h2>🧮 Counter App</h2>
      <h1 className="display-3 my-4">{count}</h1>
      <div className="btn-group">
        <button className="btn btn-success" onClick={increment}>+</button>
        <button className="btn btn-danger" onClick={decrement}>-</button>
        <button className="btn btn-secondary" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default App;
