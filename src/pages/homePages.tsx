import React from 'react';
import '../styles/pages/homepage.css';
import Navbar from "../components/Navbar";
import imgAcceuil from "../media/imgs/IMG-20240404-WA0000 1.svg";

function HomePages() {
    return (
        <div>
            <div className="global-home-pages">
                <Navbar />
                <div className="home-pages-wrapper">
                    <div className="home-page-container">
                        <span className="back-block-img-top"></span>
                        <span className="back-block-img-bot"></span>
                        <img src={imgAcceuil} alt="image acceuil"/>

                    </div>
                    <div className="home-page-container-text">
                        <h2 className="title">Vous ne trouverais pas plus Artisanale !</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <button className="button">Liste des articles</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePages;