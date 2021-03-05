import React from "react";
import HeaderNav from "./header_nav"

export default function Header() {

    return (
        <>
            <div className="animate__animated animate__lightSpeedInLeft">
                <div className="d-sm-inline-flex">
                    <img className="logo" src="./images/logo.png" alt="Logo" />
                    <h1>Welcome to the Rogers Best Burgers</h1>
                    <a name="top" href="#top"></a>
                </div>
            </div>
            <HeaderNav />
        </>);
};