import React from 'react';
import './App.css';
import Button from "./button/Button";

function App() {
  return (
    <>
      <div className="App">
        <div className="jumbotron">
          <h1 className="title">Employee-Tracker</h1>
        </div>
        <Button 
        type="btn btn-success"
        name="This is a green button"
        />
        {"\n"}
        <Button 
        type="btn btn-danger"
        name="This is a red button"
        />






      </div>
  </>
  );
  
}

export default App;
