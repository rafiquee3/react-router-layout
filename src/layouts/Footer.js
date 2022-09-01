import React from "react";
import { Route, Routes, useNavigate, useLocation, useSearchParams } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <h2>Footer</h2>
            <Routes>
                <Route path="/" element={<ShowPath />} />
                <Route path="/:id" element={<ShowPath />} />
            </Routes>
        </div>
    )
}
const ShowPath = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    let location = useLocation();
    let navigate = useNavigate();
    console.log(location);
    console.log(searchParams);
    return (
        <>
            <p>Jestes w {location.pathname}</p>
        </>
    )
}
export default Footer;