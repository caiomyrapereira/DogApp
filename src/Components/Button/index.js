import React from 'react';
import './style.css'

const Button =(props)=>(
        <div className={props.className} >
          <button onClick={props.click} > {props.children} </button>
        </div>
);

export default Button;