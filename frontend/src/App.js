import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import SimpleCalcView from './views/SimpleCalcView';
import ComplexCalcView from './views/ComplexCalcView';
import HomepageView from './views/HomepageView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomepageView />} />
        <Route path="/simplecalc" element={<SimpleCalcView />} />
        <Route path="/complexcalc" element={<ComplexCalcView />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;