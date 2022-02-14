import { Card } from '../Card/index'
import './index.css'

type individualCardprops = {
    imgUrl:string
    name:string
    info:'teams' | 'players'
}

export default function individualCard(props:individualCardprops){
    return(
        <Card>
            <div className="individual-card-infos" style={ props.info == 'players' ? {flexDirection:'column'} : {flexDirection:'row'}}>
                <img src={props.imgUrl} alt="" />
                <h4>{props.name}</h4>
            </div>
        </Card>
    )
}