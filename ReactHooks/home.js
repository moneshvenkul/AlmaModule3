import React from "react";
import { Link, Outlet } from "react-router-dom";

function Home() {
    return (
        <div>

            <nav>
           <h1>Home</h1>
           
            <Link to="/about">About</Link>
            <br />

            <Link to="/contact">Contact</Link>
            </nav>

            <Outlet/>

        </div>
    );
}

export default Home;