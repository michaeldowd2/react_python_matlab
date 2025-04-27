import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import MainContent from '../components/layout/MainContent';
import SimpleCalcParameters from '../features/SimpleCalc/Parameters';
import SimpleCalcResults from '../features/SimpleCalc/Results';
import axios from 'axios';

function SimpleCalcView() {
  const [calcType, setCalcType] = useState('');
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const calculate = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post('http://localhost:8000/simplecalc/calculate', {
        calc_type: calcType,
        x: parseFloat(x),
        y: parseFloat(y)
      });
      setResult(response.data.result);
    } catch (err) {
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar>
        <SimpleCalcParameters
          calcType={calcType}
          setCalcType={setCalcType}
          x={x}
          setX={setX}
          y={y}
          setY={setY}
          onCalculate={calculate}
          loading={loading}
        />
      </Sidebar>
      <MainContent>
        <SimpleCalcResults
          result={result}
          loading={loading}
          error={error}
        />
      </MainContent>
    </div>
  );
}

export default SimpleCalcView;
