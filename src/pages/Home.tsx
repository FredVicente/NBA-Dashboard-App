import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { Card } from '../components/cards/Card'
import { DashboardSection } from '../components/DashboardSection'
import { Footer } from '../components/Footer/index'
import { GameCard } from '../components/cards/GameCard'

import { gameCardProps, stateType } from '../types/index'

import '../styles/Home.css'

import generateGameCard from '../services/generateGameCard'
import filterArray from '../services/filterArray'

export default function Home() {

    const [allTeams, setAllTeams] = useState<string[][]>([])
    const [allPlayers, setAllPlayers] = useState<string[][]>([])
    const [allGames, setAllGames] = useState<gameCardProps[]>([])

    const reduxState:stateType = useSelector( state => state)

    useEffect(() => {
        const teamsLogoUrl = reduxState.teams.slice(0, 30).map( team => {
            return(team.WikipediaLogoUrl)
        })
        
        const result = filterArray(teamsLogoUrl, 3)
        setAllTeams(result)

    }, [reduxState.teams])

    useEffect(() => {
        try{
            const myGames = generateGameCard(reduxState.games, reduxState)
            setAllGames(myGames)
        } catch(e){
            console.log('Deu erro', e)
            setAllGames([])
        }
    }, [reduxState.games])

    useEffect(() => {
        const teamsLogoUrl = reduxState.players.slice(0, 20).map( player => {
            return(player.PhotoUrl)
        })
        
        const result = filterArray(teamsLogoUrl, 4)
        setAllPlayers(result)

    }, [reduxState.players])

    return(
        <div className="home page" >
            <DashboardSection title="JOGOS DO DIA" viewMorePage="games">
                {allGames.map( game => {
                    return(
                        <GameCard
                            day={game.day}
                            time={game.time}
                            local={game.local}
                            homeTeamLogo={game.homeTeamLogo}
                            awayTeamLogo={game.awayTeamLogo}
                        />
                    )
                })}
            </DashboardSection>

            <DashboardSection title='TIMES' viewMorePage="teams">
                {allTeams.map( group => {
                    return(
                        <Card>
                            {group.map( team => {
                                return(
                                    <img src={team} alt="" className='teams-logo'/>
                                )
                            })}
                        </Card>
                    )
                })}
            </DashboardSection>

            <DashboardSection title='JOGADORES' viewMorePage="players">
                {allPlayers.map( group => {
                    return(
                        <Card>
                            {group.map( player => {
                                return(
                                    <img src={player} alt="" className='players-photo'/>
                                )
                            })}
                        </Card>
                    )
                })}
            </DashboardSection>

            <Footer page='home'/>
        </div>
    )
}