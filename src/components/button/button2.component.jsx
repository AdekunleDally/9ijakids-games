import React from 'react';
import './button.styles.scss';

const Button =({filterByGroup, filterByLevel})=>{
    return (
        <div className="button">
        <button type="button" className="btn" onClick={()=>filterByGroup('Academic')}>Filter by Group: Academic</button>
        <button type="button" className="btn"  onClick={()=>filterByGroup('Financial Literacy')}>Filter by Group: Financial Literacy</button>

        <button type="button" className="btn" onClick={()=>filterByLevel("Key Stage 1")}>Filter by Level: Key Stage 1</button>
        <button type="button" className="btn" onClick={()=>filterByLevel("Key Stage 2")}>Filter by Level: Key Stage 2</button>
        <button type="button" className="btn" onClick={()=>filterByLevel('Financial Literacy')}>Filter by level: Financial Literacy</button>
       
        </div>
    )
}
export default Button