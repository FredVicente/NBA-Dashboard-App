export const fetchDefault = async (url: string) => {
  const response = await fetch(`https://api.sportsdata.io/v3/nba/scores/json/${url}?key=119bf739fabf43369b97085b3c3265ae`)
  return response.json();
}

// Teams: https://api.sportsdata.io/v3/nba/scores/json/AllTeams?key=119bf739fabf43369b97085b3c3265ae
// Games: https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/2022-FEB-03?key=119bf739fabf43369b97085b3c3265ae
// Players: https://api.sportsdata.io/v3/nba/scores/json/players?key=119bf739fabf43369b97085b3c3265ae
// Stadiums: https://api.sportsdata.io/v3/nba/scores/json/stadiums?key=119bf739fabf43369b97085b3c3265ae