import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import { Provider } from 'react-redux'
import store from './redux/index'

import Initial from './pages/Initial'
import  Home  from './pages/Home'
import Games from './pages/Games'
import Teams from './pages/Teams'
import Players from './pages/Players'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="/home" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/players" element={<Players />} />
        </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App