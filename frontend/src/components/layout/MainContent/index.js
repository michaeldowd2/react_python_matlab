import React from 'react';

function ResultPanel({ children }) {
  return (
    <div style={{
      flex: 1,
      padding: '2rem'
    }}>
      <h2>Calculation Result</h2>
      {children}
    </div>
  );
}

export default ResultPanel;