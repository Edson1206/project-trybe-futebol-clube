import { Router } from 'express';
import { verifyToken } from '../middlewares/jwt';
import MatchController from '../controllers/MatchController';
import validateMatch from '../middlewares/validateMatch';

const routerMatch = Router();
const controller = new MatchController();

routerMatch.get('/', controller.getMatches);
routerMatch.post('/', verifyToken, validateMatch, controller.saveMatches);

export default routerMatch;
