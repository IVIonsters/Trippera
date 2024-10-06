import './App.css'
import Hero from './components/HeroSection/Hero'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card 
        img="./images/katie-zaferes.png"
        rating='5.0'
        reviews='6'
        country='USA'
        title='Life lessons with Katie Zaferes'
        price='$136'
      />
    </>
  )
}

export default App
