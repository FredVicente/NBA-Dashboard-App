import { createStore } from 'redux'

type ActionType = {
    type:string
    teams:{
        "TeamID":number
        "Key":string
        "Active":boolean
        "City":string
        "Name":string
        "LeagueID":number
        "StadiumID":number
        "Conference":string
        "Division":string
        "PrimaryColor":string
        "SecondaryColor":string
        "TertiaryColor":string
        "QuaternaryColor":string
        "WikipediaLogoUrl":string
        "WikipediaWordMarkUrl":boolean
        "GlobalTeamID":number
        "NbaDotComTeamID":number
    }[]
}

const reducer = async (state = {}, action:ActionType) => {

    console.log(action.teams)

    console.log(state)

    /*switch(action.type){
        case 'FETCH_TEAMS':
            return action.teams
        default:
            return state
    }*/

    return action.teams
}

const store = createStore(reducer)

export default store