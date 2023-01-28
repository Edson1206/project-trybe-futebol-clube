import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';

export default class LeaderboardController {
  public leaderboardService: LeaderboardService;

  constructor() {
    this.leaderboardService = new LeaderboardService();
  }

  public getHomeLeaderboard = async (_req: Request, res: Response) => {
    const leaderboard = await this.leaderboardService.getHomeLeaderboard();

    res.status(200).json(leaderboard);
  };
}
