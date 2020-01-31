import React from 'react';
import './style.css'

const Button =(props)=>(
        <div className={props.className} >
          <button > {props.children} </button>
        </div>
);

export default Button;