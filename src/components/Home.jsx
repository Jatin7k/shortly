import React from 'react';
import "./home.css";


import img3 from "../images/image3.png"
import img4 from "../images/img4.png"
import img5 from "../images/urlshort.png"
import img6 from "../images/qr-img-1.png"
import img7 from "../images/compress-jpeg.jpg"
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


const Home = () => {
  return (
    <div  >
      <Navbar/>
      <div className='container textCont'>
        <div>
          <p className='heading'>We’ve expanded!</p>
          <p className='heading'>Shorten URLs. Generate QR Codes.</p>
          <p className='heading'>And now, compress your images and download it.</p>
        </div>
        <div>
          <img src={img3} alt="" style={{ marginTop: "-10px", marginLeft: "200px" }} />
        </div>

      </div>
      <div className='container' style={{ marginTop: "-100px" }}>
        <h3 style={{ color: "rgb(146, 142, 142)" }}>Get Started!</h3>
        <p style={{ color: "rgb(90, 87, 87)" }}>with a beautical quote....!</p>
        <p style={{ color: "rgb(68, 66, 66)", width: "40%", marginLeft: "40px" }} >~ Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. </p>
      </div>
      <hr className='container' />
      <div className='middle'>
        <img src={img4} style={{ height: "250px", width: "500px", marginLeft: "200px", marginTop: "70px" }} alt="..." />
        <p className='heading' style={{ textAlign: "center", marginTop: "-180px", marginLeft: "400px" }}>Shortly's Connections Platform</p>
        <p style={{ textAlign: "center", marginTop: "45px", fontSize: "20px", marginLeft: "400px" }}>All the products you need to manage links and QR Codes, and images, in a single unified platform.</p>
      </div>
      <div className="card-group container">


        <div className="card" style={{margin:"0 40px"}}>
          <img src={img5} className="card-img-top" alt="..." style={{height:"100%"}}/>
          <div className="card-body">
            <h5 className="card-title">Shorten Links</h5>
            <p className="card-text"> URL Shortener makes long links look cleaner and easier to share! .</p>
            <Link to="/urlshortener">
              <button>Short your Url</button>
            </Link>

          </div>
        </div>
        <div className="card" style={{margin:"0 40px"}}>
          <img src={img6} className="card-img-top" alt="..." style={{height:"100%"}}/>
          <div className="card-body">
            <h5 className="card-title">QR Code Generator</h5>
            <p className="card-text">QR Code solutions for every customer, business and brand experience.</p>
            <Link to="/qrCode">
              <button>Generate your QrCode</button>
            </Link>


          </div>
        </div>
        <div className="card">
          <img src={img7} className="card-img-top" alt="..." style={{height:"100%"}}/>
          <div className="card-body">
            <h5 className="card-title">Image Compresser</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <Link to="/imageCompress">
              <button>Compress your Imagel</button>
            </Link>
          </div>
        </div>
      </div>
      <hr className='container' />
      <div className='container'>
        <Footer />
      </div>
    </div>
  )
}

export default Home
