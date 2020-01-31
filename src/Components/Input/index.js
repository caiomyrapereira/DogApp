import React from 'react';

const Input =({className,inputValue, handlerInputValue})=>(
       <div className={className}>
         {console.log(inputValue)}
         <input  onChange={handlerInputValue}  value={inputValue}  />
       </div>
);

export default Input;