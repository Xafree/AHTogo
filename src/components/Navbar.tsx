import React from 'react';
import '../styles/components/navbar.css';
import {NavLink} from "react-router-dom";
import logo from '../media/icons/arbre.svg';
import shop from '../media/icons/shopping-cart_icon-icons.com_72552.svg';
import home from '../media/icons/home_icon-icons.com_73532.svg';
import us from '../media/icons/open-book.svg';


function Navbar() {
    return (
        <div className="menu">
            <img src={logo} alt="logo AHTogo" className="logo"/>
            <h1 className="title">AH Togo</h1>
            <div className="navbar">
                <div className="div-link">
                    <NavLink to="/" className="navlink">
                        <img src={home} alt="Acceuil" className="icons"/>
                    </NavLink>
                </div>
                <div className="div-link">
                    <NavLink to="/articles" className="navlink">
                        <img src={shop} alt="Articles" className="icons"/>
                    </NavLink>
                </div>
                <div className="div-link">
                    <NavLink to="/about-us" className="navlink">
                        <img src={us} alt="A propos de nous" className="icons"/>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
export default Navbar;