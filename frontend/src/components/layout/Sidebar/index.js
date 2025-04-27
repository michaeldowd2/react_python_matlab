import React from 'react';

function Sidebar({ children }) {
  return (
    <div style={{
      width: '300px',
      padding: '2rem',
      background: '#f5f5f5',
      borderRight: '1px solid #ddd',
      boxSizing: 'border-box'
    }}>
      <h2>Calculation Properties</h2>
      {children}
    </div>
  );
}

export default Sidebar;