import './index.css'

import { ArrowIcon } from './icons'
import { useNavigate } from 'react-router-dom'

type headerProps = {
    title:string
    lastPage:string
}

export default function Header(props:headerProps){

    const navigate = useNavigate()

    const backLastPage = () => {
        navigate(`/${props.lastPage}`)
    }

    return(
        <header className='myHeader'>
            <div className="left-content header-content">
                <span onClick={backLastPage} >
                    <ArrowIcon />
                </span>
                <h3>{props.title}</h3>
            </div>
            <div className="right-content header-content">
                <img src="https://i.ibb.co/m488ndx/nba-large-logo.png" alt="" />
            </div>
        </header>
    )
}