import { useEffect, useState } from 'react'

import { Footer } from '../components/Footer/index'
import Header from '../components/Header/index'
import { fetchDefault } from '../services/fetch'

import { gamesType } from '../types/index'

import { GameCard } from '../components/cards/GameCard'
import Loader from '../components/Loader'

function Games(){

    const [date, setDate] = useState('')
    const [hasGames, setHasGames] = useState(false)
    const [loading, setLoading] = useState(false)

    const [games, setGames] = useState<gamesType[]>([])

    const allMonths = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]

    useEffect(() => {
        setLoading(true)
        const fetchGames = async () => {

            const splitedDate = date.split('-')
            const day = splitedDate[2]
            const month = allMonths[Number(splitedDate[1])-1]
            const year = splitedDate[0]

            try{
                const result = await fetchDefault(`GamesByDate/${year}-${month}-${day}`)
                setGames(result)
                setLoading(false)
                setHasGames(true)
            } catch (e){
                console.log(e)
                setGames([])
            }
        }

        if(!date){
            const newDate = new Date()
            const day = newDate.getDate() < 0 ? `0${newDate.getDate()}` : `0${newDate.getDate()}`
            const month = newDate.toLocaleString("en", {month: "2-digit"}).toUpperCase()
            const year = newDate.getFullYear()

            setDate(`${year}-${month}-${day}`)
        } else {
            fetchGames()
        }
    }, [date])

    return(
        <div className="page games">
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
                    {loading ? <Loader/> : !hasGames ? <p>Não há nenhum jogo neste dia</p> :
                        games.map( game => {
                            return(
                                <GameCard
                                    allData={game}
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