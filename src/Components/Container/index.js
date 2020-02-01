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
   saveActual,
   handlerBreedValue,
   handlerFontValue,
   handlerColorValue,
   handlerInputValue,
   getListDogs,
   toSave
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
            breedValue = {breedValue} 
            fontValue = {fontValue }
            colorValue = {colorValue}
            saveActual = {saveActual}
            toSave={toSave}
          />
       </div>

);

export default Container;