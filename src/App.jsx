import './App.css'
import { motion } from 'framer-motion'
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
      <motion.a
        href="/mensaje"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.08, y: -8 }}
        className="fixed bottom-6 right-5 z-[60] flex items-center gap-2 rounded-full border border-pink-100/80 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-5 py-3 text-sm font-bold text-white shadow-[0_0_18px_rgba(236,72,153,.7),0_10px_30px_rgba(0,0,0,.35)] transition-colors hover:from-pink-400 hover:via-rose-400 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:ring-offset-2 focus:ring-offset-transparent sm:bottom-8 sm:right-8 sm:px-6 sm:py-4 sm:text-base"
        aria-label="Abrir la carta completa"
        title="Abrir la carta completa"
      >
        <span className="text-xl" aria-hidden="true">💌</span>
        <span>Hazme click</span>
      </motion.a>
      <Hero />
      <Timeline />
      <Gallery />
      <Letter />
      <Final />
    </>
  )
}

export default App
