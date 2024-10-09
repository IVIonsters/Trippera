/* eslint-disable no-unused-vars */
import './App.css'
import Hero from './components/HeroSection/Hero'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
// Import data for Card component
import cardData from './utils/cardData'

function App(props) {

  // Destructure the data from the cardData object
  const { id, title, description, price, stats, location, openSpots } = cardData[0]

  //  log the cardData object to the console
  console.log(cardData[0])

const cardArray = cardData.map(card => (
  <Card
  key={card.id}
  img={card.coverImg}
  rating={card.stats.rating}
  reviews={card.stats.reviewCount}
  country={card.location}
  title={card.title}
  price={card.price}
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
