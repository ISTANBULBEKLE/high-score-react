import React,{useState} from 'react';
import allCountryScores from "./data/allCountryScores";

const ToggleTheList =()=>{


    const[list, setList]= useState([]);
    function handleToggle(){
        setList();
    }

    return ( <button onClick={handleToggle} className='toggle-button'>Toggle the List</button>);
}

export default ToggleTheList;