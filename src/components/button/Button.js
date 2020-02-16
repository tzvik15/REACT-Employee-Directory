import React from "react";
import "./button.css";

const Button = props => {
    return (
      <div >
        <button className={props.type} onClick={props.function}>{props.name}</button>
        
      </div>
    );
  };
  
  export default Button;
  