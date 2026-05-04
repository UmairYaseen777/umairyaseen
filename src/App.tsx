import { useReveal } from './hooks/useReveal'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Work } from './components/Work'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'

function App() {
  useReveal()

  return (
    <div className="relative min-h-screen grain">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Experience />
      </main>
      <Contact />
    </div>
  )
}

export default App
