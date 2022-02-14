import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import IndividualCard from '../components/cards/IndividualCard'
import { Footer } from '../components/Footer/index'
import Header from '../components/Header'

import { playersType, stateType } from '../types'

export default function Players(){

    const reduxState:stateType = useSelector( state => state)

    const [searchedPlayer, setSearchedPlayer] = useState('')
    const [allPlayers, setAllPlayers] = useState<playersType>()

    useEffect(() => {
        const filteredPlayers:playersType = reduxState.players.filter( entry => `${entry.FirstName} ${entry.LastName}`.toLocaleLowerCase().includes(searchedPlayer.toLocaleLowerCase()))
        setAllPlayers(filteredPlayers)
    }, [searchedPlayer])

    return(
        <div className="players page">
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
                            />
                        )
                    })}
                </div>
            </main>
            <Footer page ='players'/>
        </div>
    )
}