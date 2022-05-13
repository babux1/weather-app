import React from 'react'

const api = {
  key: "b93bc2f925ca89f803256b7251905ae0",
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
          placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
}


export default App;
