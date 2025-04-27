import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomepageView() {
  const navigate = useNavigate();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: '#f8f9fa',
    }}>
      <h1>A Simple MATLAB Web-App Project</h1>
      <p style={{ maxWidth: 500, textAlign: 'center' }}>
        This app demonstrates how to use a modern React frontend and a Python backend to call MATLAB functions with parameters and render the results.<br/>
        Choose a calculator to get started:
      </p>
      <div style={{ marginTop: 32, display: 'flex', gap: 24 }}>
        <button
          style={{ padding: '1rem 2rem', fontSize: '1.1rem', cursor: 'pointer' }}
          onClick={() => navigate('/simplecalc')}
        >
          Simple Matlab Calculator
        </button>
        <button
          style={{ padding: '1rem 2rem', fontSize: '1.1rem', cursor: 'pointer' }}
          onClick={() => navigate('/complexcalc')}
        >
          Charting Matlab Output
        </button>
      </div>
    </div>
  );
}

export default HomepageView;
