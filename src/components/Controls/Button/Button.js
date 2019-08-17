import React from 'react';
import './Button.css';


function Button(props) {
  return (
    <div onClick={props.onClick} className="Button">
      <div className="ButtonText">
        {props.text}
      </div>
    </div>
  );
}

export default Button;
