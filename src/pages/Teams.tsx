import { stateType, DefaultPageDataType } from '../types'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

import DefaultPage from '../components/DefaultPage'

export default function Teams(){

    const reduxState:stateType = useSelector( state => state)

    const [defaultTeams, setDefaultTeams] = useState<DefaultPageDataType>([])

    useEffect(() => {
        const allTeams = reduxState.teams.map( team => {
            return{
                name:team.City + ' ' + team.Name,
                imgUrl:team.WikipediaLogoUrl
            }
        })

        setDefaultTeams(allTeams)
    }, [])

    return(
        <DefaultPage
            info="teams"
            originalData={defaultTeams}
            inputPlaceholder="Procure um time"
        />
    )
}