import{BrowserRouter, Routes, Route} from 'react-router'

import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Demo from './paginas/Demo.jsx'

function App() {
  return(
     <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
            </>
          }
        />

        <Route path="/demo" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
