import React from "react";
import { Routes, Route, Navigate} from "react-router-dom";

const permission = true;

const AdminPage = () => {
    return  (
        <>
            {permission ? <Navigate to="/contact" replace={true} /> : <p>brak uprawnien</p>}
        </>
    )
}
const PanelAdmin = () => {
    return (
        <p>panel admina</p>
    )
}

export default AdminPage;