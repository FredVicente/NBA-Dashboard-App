import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Initial(){
    
    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        const fetchTeams = async () => {
            const response = await fetch('https://api.sportsdata.io/v3/nba/scores/json/AllTeams?key=119bf739fabf43369b97085b3c3265ae')
            const result = await response.json()

            dispatch({
                type:'FETCH_TEAMS',
                teams:result
            })
        }

        fetchTeams()
    }, [])

    return(
        <div className='initial'>
            <div>Initial</div>

            <button onClick={() => {navigate('/home')}}>Click</button>
        </div>
    )
}