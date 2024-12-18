
import {BrowserRouter as  Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Category from './pages/Category'
import Whislist from './pages/Whislist'
import GameDetails from './pages/GameDetails'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='genre/:name' element={<Category/>} />
          <Route path='/whishlist' element={<Whislist/>} />
          <Route path='/Details/:id' element={<GameDetails/>} />
          <Route path='/whishlist/Details/:id' element={<GameDetails/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
