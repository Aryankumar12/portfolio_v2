import Hero from './features/hero/Hero'
import './App.css'
import Navbar from './features/navbar/Navbar'
import Projects from './features/projects/Projects'
import Contact from './features/contact/Contact'
import Footer from './features/footer/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
