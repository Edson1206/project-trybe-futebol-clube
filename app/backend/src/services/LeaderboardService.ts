import sequelize from '../database/models';
import homeLeaderboardQuery from '../utils/homeLeaderboardQuery';
import awayLeaderboardQuery from '../utils/awayLeaderboardQuery';
import fullLeaderboardQuery from '../utils/fullLeaderboardQuery';

export default class LeaderboardService {
  constructor(private _model = sequelize) { }

  public getHomeLeaderboard = async () => {
    const [getHomeLeaderboardArray] = await this._model.query(homeLeaderboardQuery);

    return getHomeLeaderboardArray;
  };

  public getAwayLeaderboard = async () => {
    const [getAwayLeaderboardArray] = await this._model.query(awayLeaderboardQuery);

    return getAwayLeaderboardArray;
  };

  public getFullLeaderboard = async () => {
    const [getFullLeaderboardArray] = await this._model.query(fullLeaderboardQuery);

    return getFullLeaderboardArray;
  };
}
