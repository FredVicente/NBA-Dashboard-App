import { useNavigate } from 'react-router-dom'

import '../styles/Initial.css'

export default function Initial(){
    
    const navigate = useNavigate()

    return(
        <div className='initial'>
            <div className="initial-container initial-top">
                <img className='nba-logo' src={'../src/images/nba-logo.png'} alt="" />
            </div>

            <div className="initial-container initial-bottom">
                <img src='https://i.ibb.co/mXNYF8W/background-nba.png' alt="" />

                <button onClick={() => navigate('/home')}>CLIQUE AQUI PARA INICIAR</button>
            </div>
        </div>
    )
}