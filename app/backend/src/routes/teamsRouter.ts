import { Router } from 'express';
import TeamController from '../controllers/TeamController';

const teamController = new TeamController();
const routerTeams = Router();

routerTeams.get('/', teamController.getAllTeams);
routerTeams.get('/:id', teamController.getTeamById);

export default routerTeams;
