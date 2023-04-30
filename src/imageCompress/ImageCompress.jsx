import React, { useState } from 'react';
import "./imageCompress.css";
import img from "../images/placeholder.png";
import imageCompression from 'browser-image-compression';
import BackgroundAnimate from '../urlshortener/BackgroundAnimate';

const ImageCompress = () => {
    const [originalImg, setOriginalImg] = useState("");
    const [originalImgFile, setOriginalImgFile] = useState("");
    const [compressedImg, setCompressedImg] = useState("");
    const [fileName, setFileName] = useState("");

    const handle = (e) =>{
       const imageFile = e.target.files[0];
       setOriginalImg(imageFile);
       setOriginalImgFile(URL.createObjectURL(imageFile));
       setFileName(imageFile.name);

    }

    const handleCompressImg = (e) =>{
     e.preventDefault();

     const options = {
      maxSizeMB : 1,
      maxWidthHeight: 500,
      useWebWorker: true,

     }
     if(options.maxSizeMB >= originalImg/1024){
      alert("Image is too small, can't be compresses");
      return 0;
     }
     let output;
     imageCompression(originalImg, options).then((x) => {
      output = x;

      const downloadLink = URL.createObjectURL(output);
      setCompressedImg(downloadLink);
     })
    }
  return (
    <div className="imgCompress">
        <div style={{maxWidth:"200px"}}>
          {
            originalImgFile ? (<img src={originalImgFile}></img> ):
            (<img src={img} className="image" />)
          } 
          
        </div>
        <div>
        <input type="file" className="mt-2 btn w-75 " onChange={(e) => handle(e)}/>
       
       {originalImgFile && <button onClick={(e)=>{handleCompressImg(e)}}>Compress Image</button>}
       {compressedImg && <button><a href={compressedImg} download={fileName}> {""}
        Download Image</a></button>}
        </div>
        <div > 
        {
            compressedImg ? (<img src={compressedImg}></img> ):
            (<img src={img} className="image1"/>)
          } 
           
        </div>
     <BackgroundAnimate/>
    </div>
  )
}

export default ImageCompress
