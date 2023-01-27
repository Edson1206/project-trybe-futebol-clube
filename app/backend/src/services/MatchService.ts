import IMatch from '../interfaces/Match';
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

  public saveMatches = async (match: IMatch) => {
    const matchSave = await Match.create({ ...match, inProgress: true });
    return { code: 201, message: matchSave };
  };

  public matchFinished = async (id: string) => {
    await Match.update({ inProgress: false }, { where: { id } });
    return { code: 200, message: 'Finished' };
  };
}
