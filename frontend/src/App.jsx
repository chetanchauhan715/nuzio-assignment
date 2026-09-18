import { Routes, Route } from 'react-router-dom'


import Login from './pages/Login'
import Profession from './pages/Profession'
import Interests from './pages/Interests'
import Voice from './pages/Voice'

import './App.css'

function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profession" element={<Profession />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/voice" element={<Voice />} />
      </Routes>
    </main>
  )
}

export default App