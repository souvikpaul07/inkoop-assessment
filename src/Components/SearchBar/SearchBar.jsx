import "./SearchBar.css";
import React, { useState } from 'react'

const SearchBar = () => {
    const [message, setMessage] = useState("");

    const onChangeHandler = (event)=>{
        // console.log(event.target.name);
        // console.log(event.target.value);
        let ele = event.target.value;
        let value = parseInt(ele, 10);      // String to Integer
        if(value<0){
            setMessage("Please enter Positive value!");
        }
        else if(value>=0 && value%2===0){
            setMessage(`${value+2}, ${value+4}, ${value+6}`);
        }
        else if(value>0 && value%2!==0){
            setMessage(`${value+2}, ${value+4}, ${value+6}`);
        }
        else{
            setMessage("");
        }
    }
    


  return (
    <div className="searchBar">
        <div>
            <h3>Enter a Number</h3>
            <input type="Number" className="searchBox" onChange={onChangeHandler}/>
            <p className="text">{message}</p>
        </div>
    </div>
  )
}

export default SearchBar;
