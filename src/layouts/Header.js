import React from "react";
import "../styles/Header.css"
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import { Route, Routes } from "react-router-dom";

const Header = () => {
    return (
        <>
        <Routes>
            <Route path="/" exact element={<Image img={img1}/>}/>
            <Route path="products" element={<Image img={img2}/>}/>
            <Route path="contact" element={<Image img={img3}/>}/>
            <Route path="admin" element={<Image img={img1}/>}/>
            <Route path="*" element={<Image img={img1}/>}/>
        </Routes>
        </>
    )
}
const Image = (props) => {
    return (
        <>
        <img src={props.img} alt="miasto"/>
        </>
    )
}
export default Header;