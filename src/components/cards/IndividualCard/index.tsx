import { Card } from '../Card/index'
import './index.css'

type individualCardprops = {
    imgUrl:string
    name:string
    info:'team' | 'player'
    cardClickFunction:Function

}

export default function individualCard(props:individualCardprops){
    return(
        <Card cardClickFunction={props.cardClickFunction}>
            <div className="individual-card-infos" style={ props.info == 'player' ? {flexDirection:'column'} : {flexDirection:'row'}}>
                <img src={props.imgUrl} alt="" />
                <h4>{props.name}</h4>
            </div>
        </Card>
    )
}