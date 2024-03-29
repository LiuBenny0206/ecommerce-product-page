import React, {useState}from "react";
import { ReactComponent as MenuIcon } from "../images/icon-close.svg";

function Menu({onClose}){
    return (
        <div className="menu">
            <div className="menu-part">
                <div className="menu-close-icon" onClick={onClose}>
                    <MenuIcon id="menu-icon"/>
                </div>
                <div className="menu-items">
                    <p>Collections</p>
                    <p>Men</p>
                    <p>Women</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
            </div>
        </div>
    )
};

export default Menu;