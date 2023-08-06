import './App.css'
import About from './components/About'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar'
import Choose from './components/Choose'
import { BrowserRouter } from 'react-router-dom'
import Offer from './components/Offer'
import Courses from './components/Courses'
import Faqs from './components/Faqs'
import Contact from './components/Contact'
function App() {
  

  return (
    <BrowserRouter>
     <Navbar />
    <Header />
    <main>
    <About/>
    <Choose/>
    <Courses/>
    <Offer/>
    <Faqs/>
    <Contact/>
    </main>
    </BrowserRouter>
  )
}

export default App
