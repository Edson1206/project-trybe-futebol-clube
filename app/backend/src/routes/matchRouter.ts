import { Router } from 'express';
import MatchController from '../controllers/MatchController';

const routerMatch = Router();
const controller = new MatchController();

routerMatch.get('/', controller.getMatches);

export default routerMatch;
