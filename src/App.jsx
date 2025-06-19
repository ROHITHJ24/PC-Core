import { useState } from 'react'

import NavBar from './Components/NavBar'
import HeroSecrtion from './Components/HeroSecrtion'
import GammingPc from './Components/GammingPc'
import Footer from './Components/Footer'
import Products from './Components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
    <HeroSecrtion/>
    <Products/>
    <GammingPc/>
    <Footer />

    </>
  )
}

export default App
