import React, { useState, useEffect } from 'react';

const Calculator = () => {
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState('');

  const handleOperandChange = (e, operand) => {
    const value = e.target.value;
    if (operand === 'operand1') {
      setOperand1(value);
    } else {
      setOperand2(value);
    }
  };

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const calculateResult = async () => {
    try {
      const response = await fetch('http://localhost:3001/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ operand1, operand2, operation }),
      });
  
      const data = await response.json();
  
      // Update the result state
      setResult(data.result);
  
      // Store data in cookies with the updated result value from data
      document.cookie = `calculatorData=${JSON.stringify({ operand1, operand2, operation, result: data.result })}`;
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  

  // Initialize state based on cookies
  useEffect(() => {
    const cookieData = document.cookie.split(';').find(cookie => cookie.trim().startsWith('calculatorData='));

    if (cookieData) {
      const { operand1, operand2, operation, result } = JSON.parse(cookieData.split('=')[1]);
      setOperand1(operand1);
      setOperand2(operand2);
      setOperation(operation);
      setResult(result);
    }
  }, []);

  return (
    <div>
      <h1>Simple Calculator</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Operand 1"
            value={operand1}
            onChange={(e) => handleOperandChange(e, 'operand1')}
          />

          <select
            style={{ width: '50px', margin: '0 5px', height: '42px' }}
            value={operation}
            onChange={handleOperationChange}
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>

          <input
            type="text"
            placeholder="Operand 2"
            value={operand2}
            onChange={(e) => handleOperandChange(e, 'operand2')}
          />
        </div>

        <button onClick={calculateResult}>Calculate</button>
      </div>

      {result !== '' && (
        <div>
          <h2>Result: {result}</h2>
        </div>
      )}
    </div>
  );
};

export default Calculator;
