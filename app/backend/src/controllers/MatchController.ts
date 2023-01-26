import { Request, Response } from 'express';
import MatchService from '../services/MatchService';

export default class MatchController {
  public matchService;

  constructor() {
    this.matchService = new MatchService();
  }

  public getMatches = async (req: Request, res: Response) => {
    const matches = await this.matchService.getAllMatches();
    return res.status(200).json(matches);
  };
}
