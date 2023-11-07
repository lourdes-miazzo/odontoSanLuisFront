import './newsCard.css'
import React from 'react'
import { Link } from 'react-router-dom'


const NewsCard = ({data}) => {
    return (
        <div>
            <div className="style">
                <div className='aroundImg'>
                <img src={data.img} alt={data.alt} className='imgSize '/>
                </div>
                <div className='linkContainer'>
                <Link to={`/api/noticias/${data._id}`} className='noDeco'><p className='titleStyle'>{data.title}</p> </Link>
                </div>
            </div> 
        </div>
    )
}

export default NewsCard