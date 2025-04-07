import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Header from './components/Header'
import Clients from './components/Clients'
import Community from './components/Community'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      <Clients />
      <Community />
    </>
  )
}

export default App
