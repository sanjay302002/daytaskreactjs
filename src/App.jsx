import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Counter from './Components/Counter'
import Services from './Components/Services'
import About from './Components/About'
import ContactUs from './Components/ContactUs'
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <About/>
        <Services/>
        <ContactUs/>
        <Routes>
          <Route path="../src/Components/Navbar.jsx"element={<h1>Home</h1>}/>
          <Route path="../src/Components/About.jsx" element={<h1>About</h1>} />
          <Route path="../src/Components/Services.jsx" element={<h1>Services</h1>} />
          <Route path="../src/Components/ContactUs.jsx" element={<h1>Contact</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App