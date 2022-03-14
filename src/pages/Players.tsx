import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import IndividualCard from '../components/cards/IndividualCard'
import PlayersDetails from '../components/details/PlayersDetails'
import { Footer } from '../components/Footer/index'
import Header from '../components/Header'

import { playersType, stateType } from '../types'

export default function Players(){

    const reduxState = useSelector( (state:stateType) => state)

    const [searchedPlayer, setSearchedPlayer] = useState('')
    const [allPlayers, setAllPlayers] = useState<playersType[]>()
    const [details, setDetails] = useState<{data:playersType, timestamp:string}>()

    useEffect(() => {
        const filteredPlayers:playersType[] = reduxState.players.filter( entry => `${entry.FirstName} ${entry.LastName}`.toLowerCase().includes(searchedPlayer.toLowerCase()))
        setAllPlayers(filteredPlayers)
    }, [searchedPlayer])

    useEffect(() => {
        setAllPlayers(reduxState.players)
    }, [reduxState.players])

    return(
        <div className="page">
            <Header lastPage='home' title='JOGADORES'/>
            <main>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder='Procure um jogador'
                        onChange={(e) => {setSearchedPlayer(e.target.value)}}
                        value={searchedPlayer}
                    />
                </div>
                <div className="cards-container">
                    {allPlayers?.slice(0, 30).map( player => {
                        return (
                            <IndividualCard
                                name={player.FirstName + ' ' + player.LastName}
                                imgUrl={player.PhotoUrl}
                                info='player'
                                cardClickFunction={() => {
                                    setDetails({data:player, timestamp:String(new Date())})
                                }}
                            />
                        )
                    })}
                </div>

                {details && <PlayersDetails allData={details.data} timestamp={details.timestamp}/>}
            </main>
            <Footer page ='players'/>
        </div>
    )
}