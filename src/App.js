import React from "react";
import './App.css';
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Form } from "./components/Form"

function App() {
  return (
    <React.Fragment>
      <Navbar />
      {/* <Form /> */}
      <Home />
    </React.Fragment>
  );
}

export default App;
