import React from 'react';
import Dog from '../Dog';
import './style.css'

const Main =({dog, fontValue, colorValue , name})=>(

       <div className="main" >
         { dog.status &&  <Dog dog={dog}
                                font={fontValue}
                                color={colorValue}
                                name ={name} 
                          />
          }
       </div>

);

export default Main;