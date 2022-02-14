import { createStore } from 'redux'

import { stateType } from '../types/index'

type ActionType = {
    type: string
    value: object[]
}

const reducer = (state:stateType = {
    teams:[],
    games:[],
    stadiums:[],
    players:[]
}, action: ActionType) => {
    switch(action.type){
        case 'FETCH_TEAMS':
            return {...state, teams:action.value}
        case 'FETCH_GAMES':
            return {...state, games:action.value}
        case 'FETCH_STADIUMS':
            return {...state, stadiums:action.value}
        case 'FETCH_PLAYERS':
            return {...state, players:action.value}
        default:
            return state
    }
}

const store = createStore(reducer as any);

export default store;