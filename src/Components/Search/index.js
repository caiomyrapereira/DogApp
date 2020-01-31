import React from 'react';
import Select from '../Select';
import Button from '../Button';
import './style.css';
import Input from '../Input';

const Search =(props)=>(
        <div className="Search">
           <Select 
             name="breed" 
             arr = {['african','akita','appenzeller']}
            />

            <Select 
             name="fonte" 
             arr = {['Arial','Calibri','Garamond']}
            />

            <Select 
             name="color" 
             arr ={['black','blue','red','green','yellon']}
            />

            <Input className='inputSearch' />

            <Button className='buttonSearch'> Search </Button>

        </div>
);

export default Search;