import './App.css'
import Hero from './components/Hero/Hero'
import Timeline from './components/Timeline/Timeline'
import Gallery from './components/Gallery/Gallery'
import Letter from './components/Letter/Letter'
import Final from './components/Final/Final'
import WelcomeModal from './components/Modal/WelcomeModal'
import LongMessage from './components/LongMessage/LongMessage'

function App() {
  if (window.location.pathname === '/mensaje') {
    return <LongMessage />
  }

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
