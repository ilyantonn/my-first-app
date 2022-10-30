import React from 'react';
import FlowerImage from './components/FlowerImage';
import AlbumMaker from './components/AlbumMaker';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <FlowerImage />
       <div>
        <h1>Welcome Home</h1>
        <h2>FLOWER JOURNAL</h2>
       <AlbumMaker />
       </div>
      </header>
    </div>
  );
}

export default App;
