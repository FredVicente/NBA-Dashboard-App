import {useEffect} from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import { useDispatch } from 'react-redux'

import Initial from './pages/Initial'
import  Home  from './pages/Home'
import Games from './pages/Games'
import Teams from './pages/Teams'
import Players from './pages/Players'

import { fetchDefault } from './services/fetch'

function App() {

  const dispatch = useDispatch()
  
  const fetchTeams = async () => {

    const result = await fetchDefault('AllTeams');

    dispatch({
        type:'FETCH_TEAMS',
        value:result
    })
  }

  const fetchGames = async () => {

    const newDate = new Date()
    const day = `${newDate.getDate()}`

    const month = newDate.toLocaleString("en", {month: "short"}).toUpperCase()
    const year = newDate.getFullYear()

    const result = await fetchDefault(`GamesByDate/${year}-${month}-${day}`);

    dispatch({
        type:'FETCH_GAMES',
        value:result
    })
  }

  const fetchStadiums = async () => {

    const result = await fetchDefault('stadiums');

    dispatch({
        type:'FETCH_STADIUMS',
        value:result
    })
  }

  const fetchPlayers = async () => {

    const result = await fetchDefault('players');

    dispatch({
        type:'FETCH_PLAYERS',
        value:result
    })
  }

  useEffect(() => {
      const fetchAll = async () => {
        await fetchTeams()
        await fetchStadiums()
        fetchGames()
        fetchPlayers()
      }

      fetchAll()
  }, [])

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