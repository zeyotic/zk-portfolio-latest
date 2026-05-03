import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Services } from './components/Services'
import { Showcase } from './components/Showcase'
import { ChatbotDemo } from './components/ChatbotDemo'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Showcase />
        <ChatbotDemo />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
