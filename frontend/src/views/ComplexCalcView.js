import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import MainContent from '../components/layout/MainContent';
import ComplexCalcParameters from '../features/ComplexCalc/Parameters';
import ComplexCalcResults from '../features/ComplexCalc/Results';
import axios from 'axios';

function ComplexCalcView() {
  const [chartName, setChartName] = useState('');
  const [xAxisName, setXAxisName] = useState('');
  const [yAxisName, setYAxisName] = useState('');
  const [numberOfRecords, setNumberOfRecords] = useState('');
  const [noiseScale, setNoiseScale] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const calculate = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post('http://localhost:8000/complexcalc/calculate', {
        chart_name: chartName,
        x_axis_name: xAxisName,
        y_axis_name: yAxisName,
        no_records: parseInt(numberOfRecords, 10),
        noise_scale: parseFloat(noiseScale)
      });
      console.log(response);
      setResult(response.data);
    } catch (err) {
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar>
        <ComplexCalcParameters
          chartName={chartName}
          setChartName={setChartName}
          xAxisName={xAxisName}
          setXAxisName={setXAxisName}
          yAxisName={yAxisName}
          setYAxisName={setYAxisName}
          numberOfRecords={numberOfRecords}
          setNumberOfRecords={setNumberOfRecords}
          noiseScale={noiseScale}
          setNoiseScale={setNoiseScale}
        />
        <button onClick={calculate} disabled={loading} style={{ marginTop: '1rem' }}>
          {loading ? 'Calculating...' : 'Calculate'}
        </button>
      </Sidebar>
      <MainContent>
        <ComplexCalcResults
          values={result && result.values}
          chartName={result && result.chart_name}
          xAxisName={result && result.x_axis_name}
          yAxisName={result && result.y_axis_name}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </MainContent>
    </div>
  );
}

export default ComplexCalcView;
