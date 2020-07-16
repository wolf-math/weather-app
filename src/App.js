import React from 'react';

import './App.css';

const api = {
  key: "6a755766b5df9d1cba0cf218126c14c1",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="search..."
            />
        </div>
      </main>
    </div>
  );
}

export default App;
