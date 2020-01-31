import React from 'react';
import Select from '../Select';
import './style.css';
import Input from '../Input';

const Search =(props)=>(
        <div className="Search">
           <Select 
             name="breed" 
             arr = {props.listDogs}
             handlerValue = {props.handlerBreedValue}
             value = {props.breedValue}
            />

            <Select 
             name="fonte" 
             arr = {['Arial','Calibri','Garamond','serif','Verdana']}
             handlerValue={props.handlerFontValue}
             value =  {props.fontValue}
            />

            <Select 
             name="color" 
             arr ={['black','blue','red','green','yellow']}
             handlerValue={props.handlerColorValue}
             value={props.colorValue}
            />

            <Input 
             inputValue={props.inputValue}
             handlerInputValue = {props.handlerInputValue}
             className='inputSearch'
            />

        </div>
);

export default Search;