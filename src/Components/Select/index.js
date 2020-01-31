import React from 'react';

const Select =({name  ,arr ,value ='',handlerValue})=>(
    <div className={name}>
      <select  onChange={handlerValue}  value= {value} >
        <option value="" disabled >{name}</option>
        { arr.map((item,index,arr)=>{
          return <option key={item} value={item}  >{ item }</option>
        }) }
      </select>
    </div>
);

export default Select;