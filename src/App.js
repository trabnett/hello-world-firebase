import React from 'react';
import './App.css';
require('dotenv').config()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="bigOne">{process.env.REACT_APP_HELLO}</h1>
        <h1>Hello World</h1>
      </header>
    </div>
  );
}

export default App;
