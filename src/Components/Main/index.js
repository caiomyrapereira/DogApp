import React from 'react';
import Dog from '../Dog';
import './style.css'

const Main =({dog, breedValue, fontValue, colorValue ,name , saveActual, toSave})=>(

       <div className="main" >
         <Dog 
           dog={dog}
           breedValue = {breedValue} 
           font={fontValue}
           color={colorValue}
           name = {name} 
           saveActual = {saveActual}
           toSave = {toSave}
         />  
       </div>

);

export default Main;