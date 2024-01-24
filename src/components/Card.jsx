import React from 'react'
import Star from '../../public/images/star.png'


const Card = (props) => {
    const cardData = props.card

    let badgeText 
    if(cardData.openSpots === 0){
        badgeText = "Sold Out"
    } else if(cardData.location === "Online"){
        badgeText="Online"
    }

    return (
        <div className='card'>
            {badgeText && <div className="card-badge">
                {badgeText}
            </div>}
            <img className="card-feature" src={`/images/${cardData.coverImg}`} alt="Main Card Image." />
            <div className="card-rating">
                <img className="card-star" src={Star} alt="Rating Star Icon." />
                <span>{cardData.stats.rating}</span>
                <span className="gray">({cardData.stats.reviewCount}) &bull;</span>
                <span className="gray">{cardData.location}</span>
            </div>
            <div className="card-info">
                <h2 className="card-title">{cardData.title}</h2>
                <p><span className="bold">From ${cardData.price}</span> / person</p>
            </div>
        </div>
    )
}

export default Card