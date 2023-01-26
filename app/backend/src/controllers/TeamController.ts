import { RequestHandler, Request, Response } from 'express';
import TeamService from '../services/TeamService';

export default class TeamController {
  public teamService: TeamService;

  constructor() {
    this.teamService = new TeamService();
  }

  public getAllTeams: RequestHandler = async (_req: Request, res: Response) => {
    const teams = await this.teamService.getAllTeams();
    return res.status(200).json(teams);
  };

  public getTeamById: RequestHandler = async (req: Request, res: Response) => {
    const { id } = req.params;
    const team = await this.teamService.getTeamById(id);

    return res.status(200).json(team);
  };
}
