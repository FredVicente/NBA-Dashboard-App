import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import DefaultPage from '../components/DefaultPage'

import { DefaultPageDataType, stateType } from '../types'

export default function Players(){

    const reduxState:stateType = useSelector( state => state)

    const [defaultPlayers, setDefaultPlayers] = useState<DefaultPageDataType>([])

    useEffect(() => {
        const allPlayers = reduxState.players.map( player => {
            return{
                name:player.FirstName + ' ' + player.LastName,
                imgUrl:player.PhotoUrl
            }
        })

        setDefaultPlayers(allPlayers)
    }, [])

    return(
        <DefaultPage
            info="players"
            originalData={defaultPlayers}
            inputPlaceholder="Procure um jogador"
        />
    )
}