import{BrowserRouter, Routes, Route} from 'react-router'

import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Demo from './paginas/Demo.jsx'
import Beneficios from './components/beneficios.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return(
     <BrowserRouter>
     <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Beneficios/>
              
              <Footer />
            </>
            
          }
          
        />

        <Route path="/demo" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
