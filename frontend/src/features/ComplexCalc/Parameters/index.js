import React from 'react';

function ComplexCalcParameters({ chartName, setChartName, xAxisName, setXAxisName, yAxisName, setYAxisName, numberOfRecords, setNumberOfRecords, noiseScale, setNoiseScale }) {
  // Set sensible defaults if not already set
  React.useEffect(() => {
    if (!chartName) setChartName('Sample Chart');
    if (!xAxisName) setXAxisName('X Axis');
    if (!yAxisName) setYAxisName('Y Axis');
    if (!numberOfRecords) setNumberOfRecords(50);
    if (!noiseScale) setNoiseScale(1.0);
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h4>Complex Calculation Parameters</h4>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Chart Name:&nbsp;
          <input
            type="text"
            value={chartName}
            onChange={e => setChartName(e.target.value)}
            style={{ width: '100%' }}
            placeholder="e.g. My Chart"
          />
        </label>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          X Axis Name:&nbsp;
          <input
            type="text"
            value={xAxisName}
            onChange={e => setXAxisName(e.target.value)}
            style={{ width: '100%' }}
            placeholder="e.g. Time"
          />
        </label>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Y Axis Name:&nbsp;
          <input
            type="text"
            value={yAxisName}
            onChange={e => setYAxisName(e.target.value)}
            style={{ width: '100%' }}
            placeholder="e.g. Value"
          />
        </label>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Number of Records:&nbsp;
          <input
            type="number"
            value={numberOfRecords}
            onChange={e => setNumberOfRecords(e.target.value)}
            style={{ width: '100%' }}
            min={1}
          />
        </label>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Noise Scale:&nbsp;
          <input
            type="number"
            value={noiseScale}
            onChange={e => setNoiseScale(e.target.value)}
            style={{ width: '100%' }}
            step="any"
          />
        </label>
      </div>
    </div>
  );
}

export default ComplexCalcParameters;
