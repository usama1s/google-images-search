import React from 'react'
import './card.css'

const Card = ({image, text}) => {
  return (
    <div>
        <div className="Card">
        <div className="card-image">
            <img src={image} alt="" />
        </div>
        <div className="card-textbox">
            <h1>{text}</h1>
        </div>
        </div>
        
        
    </div>
  )
}

export default Card
