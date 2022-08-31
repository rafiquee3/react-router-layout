import React from "react";
import { Link, useParams } from "react-router-dom";
import Product from "../components/Product";

const ProductPage = () => {
    let params = useParams();
    console.log(params)
    return  (
        <>
            <div style={{color: "black"}}>ProductPage</div>
            <Product id={params.id}/>
            <Link to="/products">Powrot do listy produktow</Link>
        </>
    )
}

export default ProductPage;