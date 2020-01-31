import React from 'react';
import Header from '../Header';
import Main from '../Main';

const Container = ({
   breedValue,
   fontValue,
   colorValue,
   inputValue,
   listDogs,
   dog,
   handlerBreedValue,
   handlerFontValue,
   handlerColorValue,
   handlerInputValue,
   getListDogs,
   getDog
})=>(
       <div className="container" >
          <Header  
            breedValue = {breedValue} 
            fontValue = {fontValue}
            colorValue = {colorValue}
            inputValue = {inputValue}
            listDogs = {listDogs}
            handlerBreedValue = {handlerBreedValue}
            handlerFontValue = {handlerFontValue}
            handlerColorValue = {handlerColorValue}
            handlerInputValue = {handlerInputValue}
            getListDogs = {getListDogs}
          />
          <Main 
            dog = {dog}
            name = {inputValue}
            fontValue = {fontValue}
            colorValue = {colorValue}
          />
       </div>

);

export default Container;