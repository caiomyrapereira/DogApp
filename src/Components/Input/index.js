import React from 'react';

const Input =({className,inputValue, handlerInputValue, text})=>(
       <div className={className}>
         {console.log(inputValue)}
         <input 
           onChange={handlerInputValue} 
           placeholder={text}  
           value={inputValue} 
           required maxLength="25" 
         />
       </div>
);

export default Input;