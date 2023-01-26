import Match from '../database/models/Matches';
import Teams from '../database/models/Teams';

export default class MatchService {
  public getAllMatches = async () => {
    const match = await Match.findAll({
      include: [{ model: Teams, as: 'homeTeam', attributes: ['teamName'] },
        { model: Teams, as: 'awayTeam', attributes: ['teamName'] }],
    });

    return match;
  };
}