import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { Footer } from '../components/Footer/index'
import Header from '../components/Header/index'
import { fetchDefault } from '../services/fetch'

import { gameCardProps, stateType, gamesType } from '../types/index'

import { GameCard } from '../components/cards/GameCard'
import generateGameCard from '../services/generateGameCard'

function Games(){

    const [date, setDate] = useState('')
    const [allGames, setAllGames] = useState<gameCardProps[]>([])
    const [hasGames, setHasGames] = useState(false)

    const [games, setGames] = useState<gamesType>([])

    const reduxState:stateType = useSelector( state => state)

    const allMonths = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]

    useEffect(() => {
        const fetchGames = async () => {

            console.log(date)

            const splitedDate = date.split('-')
            const day = splitedDate[2]
            const month = allMonths[Number(splitedDate[1])-1]
            const year = splitedDate[0]

            try{
                const result = await fetchDefault(`GamesByDate/${year}-${month}-${day}`)
                setGames(result)
            } catch (e){
                console.log(e)
                setGames([])
            }
        }

        if(!date){
            const newDate = new Date()
            const day = `${newDate.getDate()}`

            const month = newDate.toLocaleString("en", {month: "2-digit"}).toUpperCase()
            const year = newDate.getFullYear()

            const myDate = `${year}-${month}-${day}`

            setDate(myDate)
        } else {
            fetchGames()
        }
    }, [date])

    useEffect(() => {
        if(games.length > 0){
            try{
                const myGames = generateGameCard(games, reduxState)
                setAllGames(myGames)
            } catch(e){
                console.log('Deu erro', e)
                setAllGames([])
            }

            setHasGames(true)
        } else {
            setHasGames(false)
        }
    }, [games])

    return(
        <div className="games page">
            <Header title='JOGOS' lastPage='home'/>
            <main>
                <div className="input-container">
                    <input
                        type="date"
                        placeholder='Selecione a data'
                        onChange={(e) => {setDate(e.target.value)}}
                        value={date}
                    />
                </div>

                <div className="game-cards-container cards-container">
                    {!hasGames ? <p>Não há nenhum jogo neste dia</p> :
                        allGames.map( game => {
                            return(
                                <GameCard
                                    day={game.day}
                                    time={game.time}
                                    local={game.local}
                                    homeTeamLogo={game.homeTeamLogo}
                                    awayTeamLogo={game.awayTeamLogo}
                                />
                            )
                        })
                    }
                </div>
            </main>
            <Footer page='games' />
        </div>
    )
}

export default Games