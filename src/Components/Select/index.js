import React from 'react';

const Select =({name  ,arr })=>(
    <div className={name}>
      <select value="" >
        <option value="" disabled >{name}</option>
        { arr.map((item,index,arr)=>{
          return <option key={item} value={index+1+''}  >{ item }</option>
        }) }
      </select>
    </div>
);

export default Select;