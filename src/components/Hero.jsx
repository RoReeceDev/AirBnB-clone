import React from 'react'
import HeroPic from '../../public/images/photo-grid.png'

const Hero = () => {
    return (
        <section className="hero-sect">
            <img className="hero-img" src={HeroPic}/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts--all without leaving home.</p>
        </section>
    )
}

export default Hero