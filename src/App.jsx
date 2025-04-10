import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Header from './components/Header'
import Clients from './components/Clients'
import Community from './components/Community'
import Pixelgrade from './components/Pixelgrade'
import Stats from './components/stats'
import How from './components/How'
import Meet from './components/Meet'
import Article from './components/Article'
import Demo from './components/Demo'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      <Clients />
      <Community />
      <Pixelgrade />
      <Stats />
      <How />
      <Meet />
      <Article />
      <Demo />
      <Footer />
    </>
  )
}

export default App
