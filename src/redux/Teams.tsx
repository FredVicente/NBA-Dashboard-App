interface ITeams {
  teams: string
}

export const TeamsReducer: (
  state: ITeams,
  action: {
    type: any;
    value: any;
  }
) => ITeams = (
  state: {},
  action
) => {
  console.log(action);

  if (action.type === 'FETCH_TEAMS') {
    return {
      ...state,
      ...action.value
    }
  }

  return state;
};



/*
{
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
  */ 