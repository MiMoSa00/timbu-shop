import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Nav from './Components/NavBar Section/Nav'
import Women from './Components/NavBar Section/Women'

function App() {


  return (
    <div>

<Router>
        <Routes>
          <Route index element={<Nav />} />
          <Route path='/men' element={<Nav />} />
          <Route path='/women' element={<Women />} />
          </Routes>
  </Router>
    </div>
  )
}

export default App
