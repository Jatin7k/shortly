import React, { useState } from 'react';
import "./urlShortner.css";

import Navbar from '../components/Navbar';
import BackgroundAnimate from './BackgroundAnimate';
import LinkResult from './LinkResult';

const UrlShortner = ({inputValue, setInputValue}) => {
   
    const [value , setValue] = useState("");

    const handleClick = () => {
        setInputValue(value);
        setValue("");
    }
  return (
    <>
    <Navbar/>
    <div className='inputContainer' >
        
     <h1>URL <span>Shortener</span></h1>
     <div>
        <input type="text" placeholder="Paste a link to shorten it" value={value} onChange={ (e )=> setValue(e.target.value)}/>
        <button className="urlBtn" onClick={handleClick}>shorten</button>
     </div>
    <BackgroundAnimate/>
    <LinkResult inputValue={inputValue}/>
    </div>
    </>
  )
}

export default UrlShortner
