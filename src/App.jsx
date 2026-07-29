import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hero from './components/Hero/Hero'
import Timeline from './components/Timeline/Timeline'
import Gallery from './components/Gallery/Gallery'
import Letter from './components/Letter/Letter'
import Final from './components/Final/Final'
import WelcomeModal from './components/Modal/WelcomeModal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WelcomeModal />
      <Hero />
      <Timeline />
      <Gallery />
      <Letter />
      <Final />
    </>
  )
}

export default App
