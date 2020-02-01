import React from 'react';
import './style.css';
import img from './img.png';
import Button from '../Button';

const Dog = (props)=>( 
      
        <div className="dog"> 
          <h1 style={
            {
              height:'30px',
              color:!!props.color ? props.color : props.saveActual.save && !props.name ? props.saveActual.color : 'black' ,
              fontFamily:!!props.font ? props.font : props.saveActual.save ? props.saveActual.font : 'Arial',
            }
          } > 
          {!!props.name ? props.name : props.saveActual.name }
          </h1>

          <span style={
                  {
                    color:!!props.color ? props.color : props.saveActual.save && !props.name ? props.saveActual.color : 'black' ,
                    fontFamily:!!props.font ? props.font : props.saveActual.save ? props.saveActual.font : 'Arial',
                  }
          }>
            {props.saveActual.date}
          </span>
          
          <img 
             src={props.dog.status ? props.dog.url_img : img}
             alt={props.dog.name} 
           />
           {(!!props.font || !!props.color  || !!props.breedValue || !!props.name ) && props.dog.status &&  <Button  click={props.toSave} className={'save'} >To Save </Button> }
        </div>
)

export default Dog;