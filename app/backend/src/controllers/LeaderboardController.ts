import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';

export default class LeaderboardController {
  public leaderboardService: LeaderboardService;

  constructor() {
    this.leaderboardService = new LeaderboardService();
  }

  public getHomeLeaderboard = async (_req: Request, res: Response) => {
    const homeLeaderboard = await this.leaderboardService.getHomeLeaderboard();

    res.status(200).json(homeLeaderboard);
  };

  public getAwayLeaderboard = async (_req: Request, res: Response) => {
    const awayLeaderboard = await this.leaderboardService.getAwayLeaderboard();

    res.status(200).json(awayLeaderboard);
  };

  public getFullLeaderboard = async (_req: Request, res: Response) => {
    const fullLeaderboard = await this.leaderboardService.getFullLeaderboard();

    res.status(200).json(fullLeaderboard);
  };
}
