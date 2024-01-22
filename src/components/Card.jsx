import React from 'react'
import Star from '../assets/star.png'
import Katie from '../assets/katie-zaferes.png'

const Card = () => {
    return (
        <div className='card'>
            <div>
                {/* <span>Sold Out</span> */}
                <img className="card-feature" src={Katie} />
            </div>
            <div className="card-rating">
                <img className="card-star"src={Star} />
                <span>5.0</span>
                <span className="gray">(6) &bull;</span>
                <span className="gray">USA</span>
            </div>
            <div className="card-info">
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
            </div>
        </div>
    )
}

export default Card