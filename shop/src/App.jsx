import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Nav from './Components/NavBar Section/Nav'
import Women from './Components/NavBar Section/Women'
import Checkout from './Components/checkoutsection/Checkout'

function App() {


  return (
    <div>

<Router>
        <Routes>
          <Route index element={<Nav />} />
          <Route path='/men' element={<Nav />} />
          <Route path='/women' element={<Women />} />
          <Route path='/checkout' element={<Checkout />} />
          </Routes>
  </Router>
    </div>
  )
}

export default App
