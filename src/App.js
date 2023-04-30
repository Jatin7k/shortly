import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import UrlShortner from "./urlshortener/UrlShortner";
import { useState } from "react";
import QrCode from "./qrCode/QrCode";
import ImageCompress from "./imageCompress/ImageCompress";



function App() {
  const [inputValue , setInputValue] = useState("");
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/urlshortener" element={<UrlShortner setInputValue={setInputValue} inputValue={inputValue}/>}/>
        <Route path="/qrCode" element={<QrCode/>}/>
        <Route path="/imageCompress" element={<ImageCompress/>}/>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
