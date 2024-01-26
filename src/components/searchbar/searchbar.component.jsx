import React from "react";
import "./searchbar.styles.css";

const handleInput = e => { 
    console.log(e.target.value) 
};

export const SearchBar = ({ placeholder, handleInput }) => ( 
<input 
    className="search" 
    type="search" 
    placeholder={placeholder} 
    onChange={handleInput} //use onclick for assignment
    />
);

export default SearchBar