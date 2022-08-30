import React from "react";
import "../styles/Header.css"
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import { Route, Switch } from "react-router-dom";

const Header = () => {
    return (
        <Switch>
            <Route path="/products" render={() => (
                <img src={img2} alt="miasto"/>
            )} />
        </Switch>
    )
}

export default Header;