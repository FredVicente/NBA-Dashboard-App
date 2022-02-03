type gameCardProps = {
    time:string
    day:string
    local:string
    firstTeamLogo:string
    secondTeamLogo:string
}

import { Card } from '../Card'
import './index.css'

export function GameCard(props:gameCardProps){
    return(
        <Card>
            <div className="logo-team">
                <img src={props.firstTeamLogo} alt="" />
            </div>
            <div className="content">
                <h4>{props.day} - {props.time}</h4>
                <p>{props.local}</p>
            </div>
            <div className="logo-team">
                <img src={props.secondTeamLogo} alt="" />
            </div>
        </Card>
    )
}