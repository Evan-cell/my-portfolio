import React from 'react'
import './App.css';
import Features from './components/Features/Features';
import Header from './components/Header';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      
      <Header />
      <Home />
      <Features/>
    </div>
  );
}

export default App;
