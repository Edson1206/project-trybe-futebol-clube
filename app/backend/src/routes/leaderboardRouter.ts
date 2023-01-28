import { Router } from 'express';
import LeaderboardController from '../controllers/LeaderboardController';

const leaderboardController = new LeaderboardController();
const routerLeaderboard = Router();

routerLeaderboard.get('/home', leaderboardController.getHomeLeaderboard);
routerLeaderboard.get('/away', leaderboardController.getAwayLeaderboard);
routerLeaderboard.get('/', leaderboardController.getFullLeaderboard);

export default routerLeaderboard;
