import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { playersType, stateType, teamsType } from "../../../types"
import DetailsContainer from "../DetailsContainer"
import PlayersDetails from "../PlayersDetails"

import './index.css'

type teamsDetailsProp = {
    allData:teamsType
    timestamp:string
}

export default function TeamsDetails(props:teamsDetailsProp){

    const { City, Name, WikipediaLogoUrl, Conference, Division, Key } = props.allData

    const [teamPlayers, setTeamPlayers] = useState<playersType[]>([])
    const [playerDetails, setPlayerDetails] = useState<{data:playersType, timestamp:string}>()

    const reduxPlayers = useSelector((state:stateType) => state.players)

    useEffect(() => {
        const myPlayers = reduxPlayers.filter( player => player.Team == Key)
        setTeamPlayers(myPlayers)
    }, [props.allData])

    return(
        <DetailsContainer timestamp={props.timestamp}>
            <div className="info-details">
                <div className="img-and-name">
                    <img src={WikipediaLogoUrl} alt=""/>
                    <h4>{City} {Name}</h4>
                </div>

                <div className="infos"
                    style={{
                        gridTemplateColumns:'1fr 1fr'
                    }}
                >
                    <div className="info">
                        <h4>Conferência</h4>
                        <p>{Conference == 'Eastern' ? 'Leste' : 'Oeste'}</p>
                    </div>
                    <div className="info">
                        <h4>Divisão</h4>
                        <p>{translateDivision(Division)}</p>
                    </div>
                </div>

                <div className="roster-container">
                    <h3>JOGADORES</h3>

                    <div className="roster">
                        {teamPlayers.map( player => {
                            return(
                                <div
                                    className="roster-player"
                                    onClick={() => {
                                        setPlayerDetails({data:player, timestamp:String(new Date())})
                                    }}
                                >
                                    <img src={player.PhotoUrl} alt="" />
                                    <p>{player.FirstName}</p>
                                    <p>{player.LastName}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {playerDetails && <PlayersDetails allData={playerDetails.data} timestamp={playerDetails.timestamp}/>}
        </DetailsContainer>
    )
}

const translateDivision = (division:string) => {
    const divisions = [
        {
            eng:'Southeast',
            pt:'Sudeste'
        },
        {
            eng:'Atlantic',
            pt:'Atlântico'
        },
        {
            eng:'Central',
            pt:'Central'
        },
        {
            eng:'Northwest',
            pt:'Noroeste'
        },
        {
            eng:'Pacific',
            pt:'Pacífico'
        },
        {
            eng:'Southwest',
            pt:'Sudoeste'
        },
    ]

    const myDivision = divisions.find( entry => entry.eng == division)

    return myDivision?.pt
}