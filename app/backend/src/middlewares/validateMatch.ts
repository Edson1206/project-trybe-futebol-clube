import { RequestHandler } from 'express';
import Teams from '../database/models/Teams';

const validateMatch: RequestHandler = async (req, res, next) => {
  const { homeTeamId, awayTeamId } = req.body;
  if (homeTeamId === awayTeamId) {
    return res.status(422).json('It is not possible to create a match with two equal teams');
  }
  const homeTeam = await Teams.findByPk(homeTeamId);
  const awayTeam = await Teams.findByPk(awayTeamId);
  if (!homeTeam || !awayTeam) {
    return res.status(404).json('There is no team with such id!');
  }
  next();
};

export default validateMatch;
