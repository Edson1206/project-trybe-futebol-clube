import * as express from 'express';
import routerLeaderboard from './routes/leaderboardRouter';
import routerLogin from './routes/loginRouter';
import routerMatch from './routes/matchRouter';
import routerTeams from './routes/teamsRouter';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();
    this.app.use('/login', routerLogin);
    this.app.use('/teams', routerTeams);
    this.app.use('/matches', routerMatch);
    this.app.use('/leaderboard', routerLeaderboard);

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
export const { app } = new App();
