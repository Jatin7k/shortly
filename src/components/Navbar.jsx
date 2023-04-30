import React from 'react';
import img2 from "../images/logo.webp"

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "#625ad6" }} >
      <div >
        <img src={img2} style={{ height: "50px", width: "90px", borderRadius: "50%", marginLeft:"58px" }} alt="..." />
      </div>
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{color:"#fff", fontSize:"24px", marginLeft:"10px"}}>Shortly</a>
        
       
      </div>
    </nav>
  </div>
  )
}

export default Navbar
