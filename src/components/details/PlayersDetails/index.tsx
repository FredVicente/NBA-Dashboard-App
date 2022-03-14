import { playersType } from "../../../types"
import DetailsContainer from "../DetailsContainer"

import './index.css'

type teamsDetailsProp = {
    allData:playersType
    timestamp:string
}

export default function PlayersDetails(props:teamsDetailsProp){

    const { FirstName, LastName, PhotoUrl, Position, Height, Weight, BirthCountry, BirthCity, BirthState, BirthDate, Experience, Jersey } = props.allData

    // Converter peso e altura para medidas usadas no Brasil
    const convertLibsToKg = (libs:number) => {
        const kg = (libs * 0.45359237).toFixed(1)
        return kg
    }
    const convertInchToMeter = (inch:number) => {
        const m = (inch * 0.0254).toFixed(2)
        return m
    }

    // Formatar a data de nascimento
    const getBirthDate = (originDate:string) => {
        const splitedDate = originDate.split('T')[0].split('-')
        const date = `${splitedDate[2]}/${splitedDate[1]}/${splitedDate[0]}`

        return date
    }

    // Traduzir posição do jogador
    const getPosition = (pos:string) => {
        const positions = [
            {
                acro:'PG',
                en:'Point-Guard',
                pt:'Armador'
            },
            {
                acro:'SG',
                en:'Shooting-Guard',
                pt:'Ala-armador'
            },
            {
                acro:'SF',
                en:'Small-Forward',
                pt:'Ala'
            },
            {
                acro:'PF',
                en:'Power-Forward',
                pt:'Ala-pivô'
            },
            {
                acro:'C',
                en:'Center',
                pt:'Pivô'
            },
        ]

        const myPosition = positions.find( position => position.acro == pos)

        return myPosition?.pt
    }

    return(
        <DetailsContainer timestamp={props.timestamp}>
            <div className="info-details">
                <div className="img-and-name">
                    <img src={PhotoUrl} alt=""/>
                    <span className="jersey-number"><span>{Jersey}</span></span>
                    <h4>{FirstName} {LastName}</h4>
                </div>

                <div
                    className="infos"
                    style={{
                        gridTemplateColumns:'1fr 1fr'
                    }}
                >
                    <div className="info">
                        <h4>Posição</h4>
                        <p>{getPosition(Position)} ({Position})</p>
                    </div>

                    <div className="info">
                        <h4>Tempo na liga</h4>
                        <p>{Experience} anos</p>
                    </div>

                    <div className="info">
                        <h4>Altura</h4>
                        <p>{convertInchToMeter(Height)} m</p>
                    </div>

                    <div className="info">
                        <h4>Peso</h4>
                        <p>{convertLibsToKg(Weight)} Kg</p>
                    </div>

                    <div className="info" style={{gridColumn:'1 / 3'}}>
                        <h4>Nascimento</h4>
                        <p>{getBirthDate(BirthDate)} | {BirthCity}{BirthState ? `, ${BirthState}` : ''} - {BirthCountry}</p>
                    </div>
                </div>
            </div>
        </DetailsContainer>
    )
}