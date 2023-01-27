import { Request, Response } from 'express';
import MatchService from '../services/MatchService';

export default class MatchController {
  public matchService;

  constructor() {
    this.matchService = new MatchService();
  }

  public getMatches = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    let matches = await this.matchService.getAllMatches();

    if (inProgress === 'true' || inProgress === 'false') {
      const boolean = inProgress === 'true';
      matches = matches.filter((match) => match.inProgress === boolean);
    }

    return res.status(200).json(matches);
  };
}
