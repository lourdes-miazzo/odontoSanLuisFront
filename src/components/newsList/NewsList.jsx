import React from 'react'
import NewsCard from '../newsCard/NewsCard.jsx'

const NewsList = ({data= []}) => {
    return (
        data.map(news=> <NewsCard key={news._id} data={news}/>)
    )
}

export default NewsList