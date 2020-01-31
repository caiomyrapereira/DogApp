import React from 'react';
import './style.css';
import Button from '../Button';

const Dog = (props)=>( 
      
        <div className="dog"> 
          <h1 style={
            {
              color:props.color,
              fontFamily:props.font,
            }
          } > 
          {props.dog.name}
          </h1>
          <img src={props.dog.url_img} alt={props.dog.name} />
          <Button className={'save'} >To Save </Button>
        </div>
);

export default Dog;