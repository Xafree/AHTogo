import React, {useEffect} from 'react';
import '../styles/pages/homepage.css';
import '../styles/components/card.css'
import Navbar from "../components/Navbar";
import Card from "../components/card";
import {data} from "../services/dataArticles";
import '../styles/pages/articlespage.css';
import ModalInformation from "../components/modaleInformation";

function ArticlesPages() {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    let articles = data;

    useEffect(() => {
        setTimeout(()=>{
            handleOpen();
        }, 700);
    },[]);

    return (
        <div>
            <Navbar />
            <div className="global-page">
                <div className="main-list-of-articles">
                    {
                        articles.map((article, index) => (
                            <Card key={index} title={article.title} content={article.content} srcImage={article.url} />
                        ))
                    }
                </div>
                    <ModalInformation open={open} handleClose={handleClose}/>
            </div>
        </div>
    );
}

export default ArticlesPages;