import Teams from '../database/models/Teams';

export default class TeamService {
  public getAllTeams = async () => {
    const teams = await Teams.findAll();
    return teams;
  };

  public getTeamById = async (id: string) => {
    const team = await Teams.findByPk(id);
    return team;
  };
}
