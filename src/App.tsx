import React from 'react';

import { Timer } from './components/Timer';

function App() {
  return (
    <div >
      <div style={{ display: "flex", alignItems: "center", justifyContent:"space-around", margin: "3em 0 3em"}}>
        <Timer cityOrCountry="United States"></Timer>
        <Timer cityOrCountry="Mexico"></Timer>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent:"space-around" }}>
        <Timer cityOrCountry="Canada"></Timer>
        <Timer cityOrCountry="Costa Rica"></Timer>
      </div>
    </div>

  );
}

export default App;
