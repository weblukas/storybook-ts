import React from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import SvgComp from "./components/SvgComponent/SvgComp";

function App() {
  return (
    <div className="App">
      {/* <Button />  */}
      <SvgComp name="Test" />
    </div>
  );
}

export default App;
