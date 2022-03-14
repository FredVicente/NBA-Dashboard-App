import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { gamesType, stadiumsType, stateType } from '../../../types/index'

import { Card } from '../Card'
import './index.css'

type logosType = {
    homeTeamLogo:string | undefined,
    awayTeamLogo:string | undefined
}

const getDay = (originalDate:string) => {
    const date = originalDate
    const splitedDay = date.split('T')[0].split('-')
    const day = `${splitedDay[2]}/${splitedDay[1]}`

    return day
}

const getTime = (originalDate:string) => {
    const splitedTime = originalDate.split('T')[1].split(':')
    const hour = Number(splitedTime[0])+2
    const time = `${hour >= 24 ? `0${hour - 24}` : hour}:${splitedTime[1]}`

    return time
}

export function GameCard(props:{allData:gamesType}){

    const reduxState = useSelector( (state:stateType) => state)

    const [logos, setLogos] = useState<logosType>()
    const [stadium, setStadium] = useState<stadiumsType>()

    const { AwayTeam, HomeTeam, DateTime, StadiumID, Status } = props.allData

    useEffect(() => {
        const homeTeamLogo = reduxState.teams.find( team => team.Key == HomeTeam)?.WikipediaLogoUrl
        const awayTeamLogo = reduxState.teams.find( team => team.Key == AwayTeam)?.WikipediaLogoUrl

        setLogos({
            homeTeamLogo,
            awayTeamLogo
        })

        const myStadium = reduxState.stadiums.find( stadium => stadium.StadiumID == StadiumID)
        setStadium(myStadium)
    }, [props.allData])

    return(
        <Card>
            <div className="logo-team">
                <img src={logos?.homeTeamLogo} alt="" />
            </div>
                {Status == 'Scheduled' ?
                (
                    <div className="content">
                        <h4>{getDay(DateTime)} - {getTime(DateTime)}</h4>
                        <p>{stadium?.Name}</p>
                    </div>
                )
                : Status == 'InProgress' ?
                (
                    <div className="content">
                        <h4 className='special-info animated'>AO VIVO</h4>
                    </div>
                )
                : 
                (
                    <div className="content">
                        <h4>{Status}</h4>
                    </div>
                )}
            <div className="logo-team">
                <img src={logos?.awayTeamLogo} alt="" />
            </div>
        </Card>
    )
}