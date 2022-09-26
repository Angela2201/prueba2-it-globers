import React, { useState } from "react";
import './App.css';
import { Home } from "./components/Home";

function App() {

  /* const [dataAirline, setDataAirline] = useState("");
  console.log("soy data desde app", dataAirline)  */

  return (
    <React.Fragment>
      
      <Home /* setDataAirline = {setDataAirline} */ />

    </React.Fragment>
  );
}

export default App;
