import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import InstaVideo from './components/InstaVideo.jsx'
import Services from './components/Services.jsx'
import Products from './components/Products.jsx'
import Interior from './components/Interior.jsx'
import Rituals from './components/Rituals.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <Interior />
      <Rituals />
      <Gallery />
       <InstaVideo />
      <Contact />
      <Footer />
    </>
  )
}