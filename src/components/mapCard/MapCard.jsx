import React from 'react'
import Card from "../card/Card.jsx"

const MapCard = ({data= []}) => {
  return (
    data.map(news=> <Card key={news._id} data={news}/>)
  )
}

export default MapCard