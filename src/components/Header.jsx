import React, {useState} from "react";
import { ReactComponent as SneakersLogo } from "../images/logo.svg";
import { ReactComponent as CartIcon } from "../images/icon-cart.svg";
import { ReactComponent as MenuIcon } from "../images/icon-menu.svg";
import ProfilePic from "../images/image-avatar.png";
import Menu from "./Menu";


function Header (props) {
    const[isMenuOpen, setMenuOpen] = useState(false);

    const openMenu = () => {
        setMenuOpen(true); // 打开模态对话框
    };
    
    const closeMenu = () => {
        setMenuOpen(false); // 关闭模态对话框
    };

    return (
        <div className="header">
            <div className="header-left">
                <MenuIcon id="menu-icon" onClick={openMenu}/>
                {isMenuOpen && (
                <Menu onClose={closeMenu}/>
                )}
                <SneakersLogo />
                <p className="item">Collections</p>
                <p className="item">Men</p>
                <p className="item">Women</p>
                <p className="item">About</p>
                <p className="item">Contact</p>
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