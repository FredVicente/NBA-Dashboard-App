import { Footer } from '../components/Footer/index'
import IndividualCard from '../components/cards/IndividualCard'

import { stateType, teamsType } from '../types'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import TeamsDetails from '../components/details/TeamsDetails'

export default function Teams(){

    const reduxState = useSelector( (state:stateType) => state)

    const [searchedTeam, setSearchedTeam] = useState('')
    const [allTeams, setAllTeams] = useState<teamsType[]>()
    const [details, setDetails] = useState<{data:teamsType, timestamp:string}>()

    useEffect(() => {
        const filteredTeams:teamsType[] = reduxState.teams.filter( entry => `${entry.City} ${entry.Name}`.toLowerCase().includes(searchedTeam.toLowerCase()) && entry.TeamID <= 30)
        setAllTeams(filteredTeams)
    }, [searchedTeam])

    useEffect(() => {
        setAllTeams(reduxState.teams)
    }, [reduxState.teams])

    return(
        <div className="page">
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
                                cardClickFunction={() => {
                                    setDetails({data:team, timestamp:String(new Date())})
                                }}
                            />
                        )
                    })}
                </div>

                {details && <TeamsDetails allData={details.data} timestamp={details.timestamp}/>}
            </main>
            <Footer page='teams' />
        </div>
    )
}