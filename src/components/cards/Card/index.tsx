import { ReactNode } from 'react';
import './index.css'

type cardProps = {
    children:ReactNode
}

export function Card(props:cardProps){
    return(
        <div className='card'>
            {props.children}
        </div>
    )
}