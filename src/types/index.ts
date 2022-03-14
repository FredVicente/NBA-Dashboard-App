// Global state

export type teamsType = {
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
}

export type stadiumsType = {
    "StadiumID": number,
    "Active": boolean,
    "Name": string,
    "Address": string,
    "City": string,
    "State": string,
    "Zip": string,
    "Country": string,
    "Capacity": number,
    "GeoLat": number,
    "GeoLong": number
}

export type gamesType = {
    "GameID": number,
    "Season": number,
    "SeasonType": number,
    "Status": string,
    "Day": string,
    "DateTime": string,
    "AwayTeam": string,
    "HomeTeam": string,
    "AwayTeamID": number,
    "HomeTeamID": number,
    "StadiumID": number,
    "Channel": string,
    "Attendance": any,
    "AwayTeamScore": number,
    "HomeTeamScore": number,
    "Updated": string,
    "Quarter": any,
    "TimeRemainingMinutes": any,
    "TimeRemainingSeconds": any,
    "PointSpread": number,
    "OverUnder": number,
    "AwayTeamMoneyLine": number,
    "HomeTeamMoneyLine": number,
    "GlobalGameID": number,
    "GlobalAwayTeamID": number,
    "GlobalHomeTeamID": number,
    "PointSpreadAwayTeamMoneyLine": number,
    "PointSpreadHomeTeamMoneyLine": number,
    "LastPlay": string,
    "IsClosed": boolean,
    "GameEndDateTime": string,
    "HomeRotationNumber": number,
    "AwayRotationNumber": number,
    "NeutralVenue": boolean,
    "OverPayout": number,
    "UnderPayout": number,
    "CrewChiefID": number,
    "UmpireID": number,
    "RefereeID": number,
    "AlternateID": any,
    "DateTimeUTC": string,
    "SeriesInfo": any,
    "Quarters": {
        "QuarterID": number,
        "GameID": number,
        "Number": number,
        "Name": string,
        "AwayScore": number,
        "HomeScore": number
    }[]
}

export type playersType = {
    "PlayerID": number,
    "SportsDataID": string,
    "Status": string,
    "TeamID": number,
    "Team": string,
    "Jersey": number,
    "PositionCategory": string,
    "Position": string,
    "FirstName": string,
    "LastName": string,
    "Height": number,
    "Weight": number,
    "BirthDate": string,
    "BirthCity": string,
    "BirthState": string,
    "BirthCountry": string,
    "HighSchool": any,
    "College": string,
    "Salary": number,
    "PhotoUrl": string,
    "Experience": number,
    "SportRadarPlayerID": string,
    "RotoworldPlayerID": number,
    "RotoWirePlayerID": number,
    "FantasyAlarmPlayerID": number,
    "StatsPlayerID": number,
    "SportsDirectPlayerID": number,
    "XmlTeamPlayerID": number,
    "InjuryStatus": string,
    "InjuryBodyPart": string,
    "InjuryStartDate": string,
    "InjuryNotes": string,
    "FanDuelPlayerID": number,
    "DraftKingsPlayerID": number,
    "YahooPlayerID": number,
    "FanDuelName": string,
    "DraftKingsName": string,
    "YahooName": string,
    "DepthChartPosition": string,
    "DepthChartOrder": number,
    "GlobalTeamID": number,
    "FantasyDraftName": string,
    "FantasyDraftPlayerID": number,
    "UsaTodayPlayerID": number,
    "UsaTodayHeadshotUrl": string,
    "UsaTodayHeadshotNoBackgroundUrl": string,
    "UsaTodayHeadshotUpdated": string,
    "UsaTodayHeadshotNoBackgroundUpdated": string,
    "NbaDotComPlayerID": number
}

export type stateType = {
    teams:teamsType[]
    games:gamesType[]
    stadiums:stadiumsType[]
    players:playersType[]
}