import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import CardData from './data'

function App() {

  const EventCards = CardData.map((card) => {
    return (
    <Card 
    key={card.id}
    title={card.title}
    description={card.description}
    price={card.price}
    coverImg={card.coverImg}
    stats={card.stats}
    location={card.location}
    openSpots={card.openSpots}
    />
    )
  })

  return (
    <>
    <Navbar />
    <Hero />
    <section className="card-list">
    {EventCards}
    </section>
    </>
  )
}

export default App
