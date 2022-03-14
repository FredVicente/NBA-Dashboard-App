import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { Card } from '../components/cards/Card'
import { DashboardSection } from '../components/DashboardSection'
import { Footer } from '../components/Footer/index'
import { GameCard } from '../components/cards/GameCard'

import { gamesType, stateType } from '../types/index'

import '../styles/Home.css'

import filterArray from '../services/filterArray'
import Loader from '../components/Loader'

export default function Home() {

    const [allTeams, setAllTeams] = useState<string[][]>([])
    const [allPlayers, setAllPlayers] = useState<string[][]>([])
    const [allGames, setAllGames] = useState<gamesType[]>([])

    const [loadingGames, setLoadingGames] = useState(true)

    const reduxState = useSelector( (state:stateType) => state)

    useEffect(() => {
        const teamsLogoUrl = reduxState.teams.slice(0, 30).map( team => {
            return(team.WikipediaLogoUrl)
        })
        
        const result = filterArray(teamsLogoUrl, 3)
        setAllTeams(result)

    }, [reduxState.teams])

    useEffect(() => {
        try{
            setAllGames(reduxState.games)
        } catch(e){
            console.log('Deu erro', e)
            setAllGames([])
            setLoadingGames(false)
        }
    }, [reduxState.games])

    useEffect(() => {
        if(allGames.length > 0)
            setLoadingGames(false)
    }, [allGames])

    useEffect(() => {
        const teamsLogoUrl = reduxState.players.slice(0, 20).map( player => {
            return(player.PhotoUrl)
        })
        
        const result = filterArray(teamsLogoUrl, 4)
        setAllPlayers(result)

    }, [reduxState.players])

    return(
        <div className="home page" >
            <main>
                <DashboardSection title="JOGOS DO DIA" viewMorePage="games">
                    { allGames.length > 0 ?
                        allGames.map( game => {
                            return(
                                <GameCard
                                    allData={game}
                                />
                            )
                        })
                        : loadingGames ? [<Card><Loader/></Card>] : [<Card><p className='no-data-advice'>Não há nenhum jogo hoje</p></Card>]
                    }
                </DashboardSection>

                <DashboardSection title='TIMES' viewMorePage="teams">
                    {allTeams.length> 0 ? allTeams.map( group => {
                        return(
                            <Card>
                                {group.map( teamLogo => {
                                    return(
                                        <img src={teamLogo} alt="" className='teams-logo'/>
                                    )
                                })}
                            </Card>
                        )
                    }) : [<Card><Loader/></Card>]}
                </DashboardSection>

                <DashboardSection title='JOGADORES' viewMorePage="players">
                    {allPlayers.length > 0 ? allPlayers.map( group => {
                        return(
                            <Card>
                                {group.map( player => {
                                    return(
                                        <img src={player} alt="" className='players-photo'/>
                                    )
                                })}
                            </Card>
                        )
                    }) : [<Card><Loader/></Card>]}
                </DashboardSection>
            </main>

            <Footer page='home'/>
        </div>
    )
}