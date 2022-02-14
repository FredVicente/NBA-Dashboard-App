import { gameCardProps, gamesType, stateType } from "../types";

export default function generateGameCard(games:gamesType, reduxState:stateType){
    const myGames:gameCardProps[] = games.map( game => {
        const homeTeamLogo = reduxState.teams.find( team => team.Key == game.HomeTeam)?.WikipediaLogoUrl
        const awayTeamLogo = reduxState.teams.find( team => team.Key == game.AwayTeam)?.WikipediaLogoUrl

        const date = game.DateTime
        const splitedDay = date.split('T')[0].split('-')
        const day = `${splitedDay[2]}/${splitedDay[1]}`
        const splitedTime = date.split('T')[1].split(':')
        const hour = Number(splitedTime[0])+2
        const time = `${hour >= 24 ? `0${hour - 24}` : hour}:${splitedTime[1]}`

        const myStadium = reduxState.stadiums.find( stadium => stadium.StadiumID == game.StadiumID)
        const local = {
            name:myStadium?.Name,
            city:myStadium?.City
        }

        return {
            homeTeamLogo,
            awayTeamLogo,
            day,
            time,
            local,
            key:game.GameID
        }
    })

    return myGames
}