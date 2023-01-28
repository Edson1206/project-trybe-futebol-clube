import { Router } from 'express';
import LeaderboardController from '../controllers/LeaderboardController';

const leaderboardController = new LeaderboardController();
const routerLeaderboard = Router();

routerLeaderboard.get('/home', leaderboardController.getHomeLeaderboard);
routerLeaderboard.get('/away', leaderboardController.getAwayLeaderboard);

export default routerLeaderboard;
