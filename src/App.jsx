import './App.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
