import { Footer } from '../components/Footer/index'
import IndividualCard from '../components/cards/IndividualCard'

import { stateType, teamsType } from '../types'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import { useState, useEffect } from 'react'

export default function Teams(){

    const reduxState:stateType = useSelector( state => state)

    const [searchedTeam, setSearchedTeam] = useState('')
    const [allTeams, setAllTeams] = useState<teamsType>()

    useEffect(() => {
        const filteredTeams:teamsType = reduxState.teams.filter( entry => `${entry.City} ${entry.Name}`.toLocaleLowerCase().includes(searchedTeam.toLocaleLowerCase()) && entry.TeamID <= 30)
        setAllTeams(filteredTeams)
    }, [searchedTeam])

    return(
        <div className="teams page">
            <Header
                lastPage='home'
                title='TIMES'
            />
            <main>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder='Procure um time'
                        onChange={(e) => {setSearchedTeam(e.target.value)}}
                        value={searchedTeam}
                    />
                </div>
                <div className="cards-container">
                    {allTeams?.slice(0, 30).map( team => {
                        return(
                            <IndividualCard
                                imgUrl={team.WikipediaLogoUrl}
                                name={`${team.City} ${team.Name}`}
                                info='team'
                            />
                        )
                    })}
                </div>
            </main>
            <Footer page='teams' />
        </div>
    )
}