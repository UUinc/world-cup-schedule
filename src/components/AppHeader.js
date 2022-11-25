import React from "react";
import "./AppHeader.css";
import logo from "../assets/images/logo.png";

function AppHeader() {
    return (
        <div className="Header">
            <div className="Header-Top">
                <img src={logo} alt="world cup qatar 2022 logo" width="80px" />
                <h1>Fifa World Cup Qatar 2022 - Schedule</h1>;
            </div>
        </div>
    );
}

export default AppHeader;
