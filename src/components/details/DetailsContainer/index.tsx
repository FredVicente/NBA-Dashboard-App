import { ReactNode, useEffect, useState } from 'react'
import './index.css'

type DetailsContainerProps = {
    children:ReactNode
    timestamp:string
}

export default function DetailsContainer(props:DetailsContainerProps){

    const [active, setActive] = useState(true)
    const [display, setDisplay] = useState(true)
    
    useEffect(() => {
        setActive(true)
    }, [props.timestamp])

    useEffect(() => {
        if(!active)
            setTimeout(() => { setDisplay(false) }, 1000)
        else{
            setDisplay(true)
            setTimeout(() => { setDisplay(true) }, 1000)
        }
    }, [active])

    return(
        <div
            className={!active ? 'details-container inactive' : 'details-container'}
            style={display ? {display:'flex'} : {display:'none'}}
        >
            <div onClick={() => { setActive(false) }} className='close-details-container'>X</div>
            {props.children}
        </div>
    )
}