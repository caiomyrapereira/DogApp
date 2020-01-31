import React from 'react';
import './style.css';
import Button from '../Button';

const Dog = (props)=>(
        <div className="dog"> 
          <h1> breed name </h1>
          <img src="https://images.dog.ceo/breeds/spaniel-welsh/n02102177_4181.jpg" alt="spaniel-welsh" />
          <Button className={'save'} >To Save </Button>
        </div>
);

export default Dog;