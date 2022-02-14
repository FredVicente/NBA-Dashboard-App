import { gameCardProps } from '../../../types/index'

import { Card } from '../Card'
import './index.css'

export function GameCard(props:gameCardProps){
    return(
        <Card>
            <div className="logo-team">
                <img src={props.homeTeamLogo} alt="" />
            </div>
            <div className="content">
                <h4>{props.day} - {props.time}</h4>
                <p>{props.local?.name}</p>
            </div>
            <div className="logo-team">
                <img src={props.awayTeamLogo} alt="" />
            </div>
        </Card>
    )
}