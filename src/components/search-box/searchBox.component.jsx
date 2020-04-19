import React from 'react';
import '../search-box/searchBox.styles.css'

/* Functional components - Do not have lifecycle methods or state */
export const SearchBox = ({placeholder,handleChange}) => (
    <input 
        className = 'search'
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange}
    />
)