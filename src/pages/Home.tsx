import { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'

import { Card } from '../components/Card'
import { DashboardSection } from '../components/DashboardSection'
import { Footer } from '../components/Footer/index'
import { GameCard } from '../components/GameCard'

import '../styles/Home.css'

const games = [
    {
        day:'02/02',
        time:'19:00',
        firstTeamLogo:'https://logodetimes.com/times/boston-celtics/logo-boston-celtics-2048.png',
        secondTeamLogo:'https://logodownload.org/wp-content/uploads/2021/07/denver-nuggets-logo-1-2048x2048.png',
        local:'TD Garden'
    },
    {
        day:'02/02',
        time:'20:30',
        firstTeamLogo:'https://th.bing.com/th/id/R.3dd6d9d2644ce215fee72e9f61db8e41?rik=Uvz%2ftB1L4XRh7g&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f04%2fLA_Clippers_logo_logotype_emblem.png&ehk=Ywu7nJsKs0fzUZXwWmnXLIfHjoe%2fT6YfC6hEy8btDqQ%3d&risl=&pid=ImgRaw&r=0',
        secondTeamLogo:'https://th.bing.com/th/id/OIP.NQc6yeurPq0bEo8ptgvYewHaJK?pid=ImgDet&rs=1',
        local:'Staples Center'
    },
    {
        day:'02/02',
        time:'23:00',
        firstTeamLogo:'https://content.sportslogos.net/logos/6/238/full/5329.gif',
        secondTeamLogo:'https://th.bing.com/th/id/R.fb7b4b737a3ced63471dc6fdbaaa299c?rik=ja0%2bq5%2fAmI8pyg&pid=ImgRaw&r=0',
        local:'Talking Stick Resort Arena'
    }
]

const teamsUrl = [
    'https://upload.wikimedia.org\/wikipedia\/en\/0\/02\/Washington_Wizards_logo.svg',
    'https://upload.wikimedia.org\/wikipedia\/en\/c\/c4\/Charlotte_Hornets_%282014%29.svg',
    'https://upload.wikimedia.org\/wikipedia\/en\/2\/24\/Atlanta_Hawks_logo.svg',
    'https://upload.wikimedia.org\/wikipedia\/en\/f\/fb\/Miami_Heat_logo.svg',
    'https://upload.wikimedia.org\/wikipedia\/en\/1\/10\/Orlando_Magic_logo.svg',
    'https://upload.wikimedia.org\/wikipedia\/en\/2\/25\/New_York_Knicks_logo.svg'
]

export default function Home() {

    const [allTeams, setAllTeams] = useState<string[][]>([])

    const reduxTeams = useSelector( state => state)

    useEffect(() => {

        console.log(reduxTeams)

        const result = filterArray(teamsUrl, 3)
        setAllTeams(result)
    }, [])

    return(
        <div
            className="home"
        >
            <DashboardSection title="JOGOS DO DIA">
                {games.map( game => {
                    return(
                        <GameCard
                            day={game.day}
                            time={game.time}
                            local={game.local}
                            firstTeamLogo={game.firstTeamLogo}
                            secondTeamLogo={game.secondTeamLogo}
                        />
                    )
                })}
            </DashboardSection>

            <DashboardSection title='TIMES'>
                {allTeams.map( group => {
                    return(
                        <Card>
                            {group.map( team => {
                                return(
                                    <img src={team} alt="" />
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

const filterArray = (arr:string[], itemsPerCard:number) => {
    let startIndex = 0

    const separatedArray = []

    for(let i = 0; i < Math.ceil(arr.length/itemsPerCard); i++){
        separatedArray.push(arr.slice(startIndex, startIndex + itemsPerCard))
        startIndex += itemsPerCard
    }

    return separatedArray
}