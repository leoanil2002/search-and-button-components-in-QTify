// src/App.js
import React from 'react';
import Button from './Button';
import SearchBar from './SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button />
        <SearchBar />
      </header>
    </div>
  );
}

export default App;
