import React from 'react'; 
import Search from '../Search'
import './style.css'


const Header =({
  breedValue,
  fontValue,
  colorValue,
  inputValue,
  listDogs,
  handlerBreedValue, 
  handlerFontValue, 
  handlerColorValue,
  handlerInputValue,
  getDog
})=>(
        <div className="header">
          <Search  
            breedValue={breedValue} 
            fontValue = {fontValue}
            colorValue = {colorValue}
            inputValue= {inputValue}
            listDogs = {listDogs}
            handlerBreedValue = {handlerBreedValue}
            handlerFontValue = {handlerFontValue}
            handlerColorValue = {handlerColorValue}
            handlerInputValue = {handlerInputValue}
            getDog = {getDog}
          />
        </div>
);

export default Header;