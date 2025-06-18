import React, { useState } from 'react';

const AddTwoNumbers = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);

  const handleAdd = () => {
    setSum(Number(num1) + Number(num2));
  };

  return (
    <div>
      <h2>Add Two Numbers</h2>
      <input
        type="number"
        placeholder="Enter f
        irst number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        data-testid="num1"
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        data-testid="num2"
      />
      <button onClick={handleAdd}>Add</button>
      {sum !== null && <p data-testid="result">Sum: {sum}</p>}
    </div>
  );
};

export default AddTwoNumbers;
