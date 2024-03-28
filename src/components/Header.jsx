import React, {useState} from "react";
import { ReactComponent as SneakersLogo } from "../images/logo.svg";
import { ReactComponent as CartIcon } from "../images/icon-cart.svg";
import ProfilePic from "../images/image-avatar.png"

function Header (props) {
    return (
        <div className="header">
            <div className="header-left">
                <SneakersLogo />
                <p>Collections</p>
                <p>Men</p>
                <p>Women</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div className="header-right">
                <div className="header-cart-part">
                    <p id="header-cart-number">{props.shoesAmount || 0}</p>
                    <CartIcon  id="cart-icon" onClick={props.cartSection}/>
                </div>
                <img src={ProfilePic} alt="avatar" />
            </div>
        </div>
    );
}

export default Header;