import React from 'react';
import './button.styles.scss';
function Button({ button, filter}){
  return (
      <div className="button">
      {
        button.map((cat, i)=>(
          <button type="button" onClick={()=> filter(cat)}>{cat}</button>
  ))
      }     
   </div>
  )
}

export default Button;