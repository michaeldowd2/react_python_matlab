import React from 'react';

function SimpleCalcResults({ result, loading, error }) {
  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result !== null && (
        <div style={{ marginTop: '2rem' }}>
          <h1>Result: {result}</h1>
        </div>
      )}
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default SimpleCalcResults;
