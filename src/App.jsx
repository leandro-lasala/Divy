import { BrowserRouter, Routes, Route } from 'react-router'

import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/footer.jsx'
import Demo from './paginas/Demo.jsx'

function App() {
  return (
    <BrowserRouter>
      <div id="top">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
              </>
            }
          />

          <Route path="/demo" element={<Demo />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App