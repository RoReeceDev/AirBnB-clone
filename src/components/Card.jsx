import React from 'react'
import Star from '../assets/star.png'
import Katie from '../assets/katie-zaferes.png'

const Card = ({ img, rating, reviewCount, country, title, price }) => {

    return (
        <div className='card'>
            <div>
                {/* <span>Sold Out</span> */}
                <img className="card-feature" src={`/src/assets/${img}`} alt="Main Card Image."/>
            </div>
            <div className="card-rating">
                <img className="card-star"src={Star} alt="Rating Star Icon." />
                <span>{rating}</span>
                <span className="gray">({reviewCount}) &bull;</span>
                <span className="gray">{country}</span>
            </div>
            <div className="card-info">
            <h2 className="card-title">{title}</h2>
            <p><span className="bold">From ${price}</span> / person</p>
            </div>
        </div>
    )
}

export default Card