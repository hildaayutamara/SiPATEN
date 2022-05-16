import React from 'react';
import './App.css';
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = () => {
  return (
    <> 
    <div className='search-box'>
      <AiOutlineSearch />
      <input className='placeholder' type="text" placeholder="Search..." ></input>
    </div>
    </>
  )
}

export default Searchbar

