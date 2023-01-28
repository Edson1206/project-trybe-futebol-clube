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

  public saveMatches = async (req: Request, res: Response) => {
    const match = req.body;
    const { code, message } = await this.matchService.saveMatches(match);
    return res.status(code).json(message);
  };

  public matchFinished = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { code, message } = await this.matchService.matchFinished(id);
    return res.status(code).json({ message });
  };

  public updateMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    const { code, message } = await this.matchService.updateMatch(id, body);
    return res.status(code).json({ message });
  };
}
