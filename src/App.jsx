import { useState } from 'react'
import './App.scss'

import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'

function App() {

  const [appMode, setAppMode] = useState(false)

  const handleSwitchMode = (newMode) => {
    setAppMode(newMode)

    if (newMode) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
  }

  return (
    <>
      <div className='portfolio'>
        <Navbar sendToParent={handleSwitchMode} />
        <Home switchMode={appMode} />
        <About />
      </div>
    </>
  )
}

export default App
