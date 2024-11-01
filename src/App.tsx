
import {BrowserRouter as  Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Category from './pages/Category'
import Whislist from './pages/Whislist'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='genre/:name' element={<Category/>} />
          <Route path='/whishlist' element={<Whislist/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
