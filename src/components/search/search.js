import React from 'react';
import './search.styles.scss';


const Search =({searchFilter})=>{
    return (
        <div className="search">
        <input type='search' placeholder= 'searchTerm' onChange={searchFilter()} className="input" />
        </div>
    )
}
export default Search