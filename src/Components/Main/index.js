import React from 'react';
import Dog from '../Dog';
import './style.css'

const Main =({dog, fontValue, colorValue})=>(

       <div className="main" >
         { dog.status &&  <Dog dog={dog}
                                font={fontValue}
                                color={colorValue} 
                          />
          }
       </div>

);

export default Main;