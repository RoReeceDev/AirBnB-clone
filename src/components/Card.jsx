import React from 'react'
import Star from '../../public/images/star.png'


const Card = ({ coverImg, stats, price, description, title, location, openSpots, key }) => {

    let badgeText 
    if(openSpots === 0){
        badgeText = "Sold Out"
    } else if(location === "Online"){
        badgeText="Online"
    }

    return (
        <div className='card'>
            {badgeText && <div className="card-badge">
                {badgeText}
            </div>}
            <img className="card-feature" src={`/images/${coverImg}`} alt="Main Card Image." />
            <div className="card-rating">
                <img className="card-star" src={Star} alt="Rating Star Icon." />
                <span>{stats.rating}</span>
                <span className="gray">({stats.reviewCount}) &bull;</span>
                <span className="gray">{location}</span>
            </div>
            <div className="card-info">
                <h2 className="card-title">{title}</h2>
                <p><span className="bold">From ${price}</span> / person</p>
            </div>
        </div>
    )
}

export default Card