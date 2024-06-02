import React from 'react';
import '../styles/components/card.css';

interface ICard {
    title: string;
    srcImage: string;
    content: string;
}

function Card({title, content, srcImage}: ICard) {
    //https://srv1468-files.hstgr.io/a5873d5e5cd44b6c/files/images/
    ///Users/xafree/Documents/01-Project/AhTogo/01-developpement/website/frontend/ahtogo/src/media/imgs/
    return (
        <div className="div-wrapper">
            <div className="card">
                <img src={require(`/Users/xafree/Documents/01-Project/AhTogo/01-developpement/website/frontend/ahtogo/src/media/imgs/${srcImage}`)} alt="Un chapeau" className="img-card"/>
                <div className="content">
                    <h1>{title}</h1>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;