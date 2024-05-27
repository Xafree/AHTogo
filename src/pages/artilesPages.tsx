import React from 'react';
import '../styles/pages/homepage.css';
import Navbar from "../components/Navbar";
import Card from "../components/card";
import bob from '../media/imgs/bob.jpeg';
import {data} from "../services/dataArticles";
import '../styles/pages/articlespage.css';

function ArticlesPages() {
    let articles = data; // normalement c'est un appel API mais pas de base de donnée ici

    return (
        <div>
            <Navbar />
            <div className="global-page">
                <div className="main-list-of-articles">
                    {
                        articles.map((article, index) => (
                            <Card key={index} title={article.title} content={article.content} srcImage={bob}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ArticlesPages;