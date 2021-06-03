import React from 'react';
import './search.styles.scss';


const Search =({searchFilter})=>{
    return (
        <div className="search">
        <input type='search' placeholder= 'search by topic' onChange={e=>searchFilter(e.target.value)} className="input"  />
        </div>
    )
}
export default Search