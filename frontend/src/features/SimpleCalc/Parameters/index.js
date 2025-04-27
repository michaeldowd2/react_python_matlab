import React from 'react';

function SimpleCalcParameters({ calcType, setCalcType, x, setX, y, setY, onCalculate, loading }) {
  // Set sensible defaults if not already set
  React.useEffect(() => {
    if (!calcType) setCalcType('add');
    if (!x) setX(1);
    if (!y) setY(2);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Calculation Type:&nbsp;
          <select
            value={calcType}
            onChange={e => setCalcType(e.target.value)}
            style={{ width: '100%' }}
          >
            <option value="">Select calculation type</option>
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
          </select>
        </label>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          x:&nbsp;
          <input
            type="number"
            value={x}
            onChange={e => setX(e.target.value)}
            style={{ width: '100%' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          y:&nbsp;
          <input
            type="number"
            value={y}
            onChange={e => setY(e.target.value)}
            style={{ width: '100%' }}
          />
        </label>
      </div>
      <button onClick={onCalculate} disabled={loading}>
        {loading ? 'Calculating...' : 'Calculate'}
      </button>
    </div>
  );
}

export default SimpleCalcParameters;
