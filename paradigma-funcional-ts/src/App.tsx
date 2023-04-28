import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CalculatorComponent } from './components';

function App() {
  return (
    <div className="app">
      <div className="cover"><p className="title">Programação Funcional</p></div>
      <CalculatorComponent />
    </div>
    
  );
}

export default App;
