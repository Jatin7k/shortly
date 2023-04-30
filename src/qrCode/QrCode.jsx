import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import "./qrCode.css";
import BackgroundAnimate from '../urlshortener/BackgroundAnimate';
import QRCodeGenerate from "qrcode.react";

const QrCode = () => {
    const [url , setUrl] = useState("");
    const [qrcode , setQrcode] = useState("");

    const GenerateQRCode = () =>{
        
            setQrcode(url);
        
    }
  return (
    <>
    <Navbar/>
    <div className="qrCode">
      <h1>QR Code <span>Generator</span></h1>
      <input type="text" placeholder="e.g. https://google.com" value={url} onChange={(e) => setUrl(e.target.value)}/>
      
      <button className="qrBtn" onClick={GenerateQRCode}>Generate</button>
      {
        qrcode && <>
          <QRCodeGenerate value={url} className="qrImg" style={{height:"350px" , width:"350px"}}>

      </QRCodeGenerate>
      {/* <a href={url} download="qrcode.png">Download</a> */}
        </>
    }
    
      
      <BackgroundAnimate/>
    </div>
    </>
  )
}

export default QrCode
