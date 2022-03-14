import { ReactNode } from 'react';
import './index.css'

type cardProps = {
    children:ReactNode
    cardClickFunction?:Function
}

export function Card(props:cardProps){
    return(
        <div className='card' onClick={() => {if(props.cardClickFunction) props.cardClickFunction()}}>
            {props.children}
        </div>
    )
}