import './App.css'
import Hero from './components/HeroSection/Hero'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
// Import data for Card component
import cardData from './utils/cardData'

function App() {

  // Log the first element of the cardData object to the console
  console.log(cardData[0])

  // Map over cardData to create an array of Card components
  const cardArray = cardData.map(card => (
    // <Card
    //   key={card.id}
    //   img={card.coverImg}
    //   rating={card.stats.rating}
    //   reviews={card.stats.reviewCount}
    //   country={card.location}
    //   title={card.title}
    //   price={card.price}
    //   openSpots={card.openSpots}
    // />
    <Card
    key={card.id}
    card={card}
  />
  ))

  return (
    <>
      <Navbar />
      <Hero />
      <section className='card-section'>
        {cardArray}
      </section>
    </>
  )
}

export default App