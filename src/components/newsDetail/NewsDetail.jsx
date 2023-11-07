import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { oneNewsRequest } from '../../api/auth'
import { useEffect } from 'react'
import "./newsDetail.css"
import Footer from '../footer/Footer'
const NewsDetail = () => {
    const id= useParams()
    const idString= id.id
   
    const [news, setNews]= useState(null)
    
    
    useEffect(() => {
        const oneNews= async()=>{
            try{
                const response= await oneNewsRequest(idString)
                setNews(response.payload)
              
            }
            catch(e){
                console.log(e)
            }
        }
        oneNews()
    }, [id])


    return (
        <>
        {
            news
            ?
            (<>
                <div className='backColor9'>
                    <div className='aroundNews'>
                        <div className='aroundImag'>
                            <img src={news.img} alt={news.alt} className='imgSiz'/> 
                        </div>
                        <h3 className='newsTitle'>{news.title}</h3>
                        <p className='pdetailStyle'>{news.text}</p> 
                    </div>
                </div>
                <Footer/>
            </>)
            :
            (<div>Cargando...</div>)
        }
        </>
    )
}

export default NewsDetail