import Teams from '../database/models/Teams';

export default class TeamService {
  constructor(private _model = Teams) { }

  public async getAllTeams() {
    const teams = await this._model.findAll();
    return teams;
  }

  public async getTeamById(id: string) {
    const team = await this._model.findByPk(id);
    return team;
  }
}
