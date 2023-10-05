import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/Card'
import { data } from './Data'


function App() {

  const cards = data.map((item) => {
    return(
      <Card 
      key = {item.id}
      img = {item.img}
      name = {item.title}
      distance = {item.distance}
      price = {item.price}
      />
    )
  })

  return (
    <>
    <Navbar />
    <Hero />
    <div className="card-grid">{cards}</div>
    </>
  )
}

export default App
