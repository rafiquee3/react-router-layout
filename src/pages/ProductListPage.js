import React from "react";
import { Link } from "react-router-dom";

const products = ["car", "bike", "motocycle"];

const ProductListPage = () => {

    const list = products.map(product => (
        <li key={product}>
            <Link to={`/products/${product}`}>{product}</Link>
        </li>
    ))
    return (
        <div className="products">
            <h2>Lista produktow</h2>
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        </div>
    )
}
export default ProductListPage;