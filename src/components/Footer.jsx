import React from "react";
import "./footer.css";
import img1 from "../images/img6.png"


const Footer = () => {
  return (
    <div>

      <section className="contact-short">
        <div className="fSection">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Start shortening your long links.</h3>
          </div>
         <div>
         <img src={img1} alt="..." className="fimage"/>
         </div>
         
        </div>
      </section>

      

      <footer className="footer">
        <div className="grid-column">
          <div className="footer-about">
            <h3 className="fTitle">Shortly</h3>
            <p className="footer-text">Our goal is to implement a system where you can shorten or manage your long links , generate Qr codes from the links and you can also manage or compresses your images and downlaod it.</p>
          </div>

         


       
          <div className="footer-contact">
            <h3 style={{fontSize:"16px", fontWeight:"bold",marginLeft:"40px"}}>Call Us</h3>
            <h3  style={{fontSize:"14px" , color:"rgb(92, 93, 94)",marginLeft:"40px"}}>+91 12345678978</h3>
          </div>
          
         
         <div className="footer-legal">
           <p  style={{marginLeft:"40px"}}>
           Copyright © 2023 Shortly. All Rights Reserved 
           </p>
         
             <p style={{marginTop:"-10px", fontSize:"14px" , color:"rgb(92, 93, 94)",marginLeft:"40px"}}>PRIVACY POLICY</p>
             <p style={{marginTop:"-10px", fontSize:"14px", color:"rgb(92, 93, 94)",marginLeft:"40px"}}>TERMS & CONDITIONS</p>
           
        
       </div>
        </div>

       
       
      <div className="fLists">
            <ul className="fList"> Why Shortly?
                <li className="fListItem">Shortly 101</li>
                <li className="fListItem">Integratoin and API</li>
                <li className="fListItem">Management and Analytics</li>
               
            </ul>
            <ul className="fList"> Products
          <li className="fListItem">Link Management</li>
          <li className="fListItem">QR Codes </li>
          <li className="fListItem">Image Compress</li>
          
        </ul>
        
       
        <ul className="fList"> Legal
          <li className="fListItem">Privacy Policy</li>
          <li className="fListItem">Partner Help</li>
          <li className="fListItem">Cookie Policy</li>
          <li className="fListItem">Sustainability</li>
          <li className="fListItem">Terms of Service</li>
          <li className="fListItem">Acceptable Use Policy</li>
          <li className="fListItem">Code of Conduct</li>
          <li className="fListItem">Terms & conditions</li>
        </ul>
        </div>
      </footer>
    </div>
  );
};


  
export default Footer;