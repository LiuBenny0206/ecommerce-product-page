import React, {useState} from "react";
import { ReactComponent as SneakersLogo } from "../images/logo.svg";
import { ReactComponent as CartIcon } from "../images/icon-cart.svg";
import { ReactComponent as MenuIcon } from "../images/icon-menu.svg";
import ProfilePic from "../images/image-avatar.png";
import Menu from "./Menu";


function Header (props) {
    const[isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    const navItems = ["Collections", "Men", "Women", "About", "Contact"];



    return (
        <div className="header">
            <div className="header-left">
                <MenuIcon id="menu-icon" onClick={toggleMenu}/>
                {isMenuOpen && (
                <Menu onClose={toggleMenu}/>
                )}
                <SneakersLogo />
                {navItems.map(item => (
                    <p key={item} className="item">{item}</p>
                ))}
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