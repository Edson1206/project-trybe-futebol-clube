import sequelize from '../database/models';
import homeLeaderboardQuery from '../utils/leaderboardQuery';

export default class LeaderboardService {
  constructor(private _model = sequelize) { }
  public getHomeLeaderboard = async () => {
    const [getHomeLeaderboardArray] = await this._model.query(homeLeaderboardQuery);

    return getHomeLeaderboardArray;
  };
}
