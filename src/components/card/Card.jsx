import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'
const Card = ({data}) => {

  return (
    <>
      <Link to={`/api/noticias/${data._id}`} className='linkNews'>
        <div className='cardStyle d-flex'>
          <img src={data.img} alt={data.alt} className='card-img-left imageStyle'/> 
          <div className='aroundCardBody'>
            <div className='cardBody'>
                <h5 className='h5Title'>{data.title}</h5>
                <p className='pStyle'>{data.text}</p>
            </div>
          </div>
        </div>
    </Link>
  
    </>
  )
}

export default Card