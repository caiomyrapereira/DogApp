import React from 'react';
import Header from '../Header';
import Main from '../Main';

const Container = ({
   breedValue,
   fontValue,
   colorValue,
   inputValue,
   dog,
   handlerBreedValue,
   handlerFontValue,
   handlerColorValue,
   handlerInputValue,
   getDog
})=>(
       <div className="container" >
          <Header  
            breedValue = {breedValue} 
            fontValue = {fontValue}
            colorValue = {colorValue}
            inputValue = {inputValue}
            handlerBreedValue = {handlerBreedValue}
            handlerFontValue = {handlerFontValue}
            handlerColorValue = {handlerColorValue}
            handlerInputValue = {handlerInputValue}
            getDog={getDog}
          />
          <Main 
            dog = {dog}
            fontValue = {fontValue}
            colorValue = {colorValue}
          />
       </div>

);

export default Container;