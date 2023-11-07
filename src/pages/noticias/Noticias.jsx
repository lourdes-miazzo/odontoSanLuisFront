import "./noticias.css"
import { useState, useEffect  } from "react"
import Footer from "../../components/footer/Footer.jsx"

import { allNewsRequest } from "../../api/auth.js"
import Spinner from 'react-bootstrap/Spinner';
import NewsList from "../../components/newsList/NewsList.jsx"

const Noticias= ()=>{
    const [data, setData]= useState([])
    const [loading, setLoading]= useState(false)


    useEffect(() => {
        const allNews = async () => {
            setLoading(true);
            try {
            const dbNews = await allNewsRequest();
            const newsArray = dbNews.payload;
        
            setData(newsArray);
            } 
            catch (error) {
            console.error(error);
            }
            setLoading(false);
        };
        
        allNews(); 
        }, []);
    return(
        <>
        <div className="backColor7">
        {
        loading 
        ? 
        (<div className="backLoading">
            <div className="loading">
                <Spinner animation="grow"/>
                <h3 className="chargeText">Cargando...</h3>
            </div>
        </div>)
        :
        (<>
            <div className="backLoading1">
                <h3 className="newsStyle">NOTICIAS</h3>
                <div className="aroundNews1">
                    <NewsList data={data}/> 
                </div>
            </div>
            </>
        )
        } 
        </div>
        <Footer/>
        </>
    )
}

export default Noticias