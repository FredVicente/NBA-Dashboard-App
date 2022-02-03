import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import { Initial } from './pages/Initial'
import { Home } from './pages/Home'
import { Games } from './pages/Games'
import { Teams } from './pages/Teams'
import { Players } from './pages/Players'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Initial />} />
      <Route path="/home" element={<Home />} />
      <Route path="/games" element={<Games />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/players" element={<Players />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App