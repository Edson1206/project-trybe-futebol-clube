import { Request, Response } from 'express';
import LoginService from '../services/LoginService';
import { createToken } from '../middlewares/jwt';

export default class LoginController {
  public loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }

  public login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const userToken = await this.loginService.login({ email, password });

    if (!userToken) return res.status(401).json({ message: 'Incorrect email or password' });

    const { id, username, role } = userToken;
    const token = createToken({ id, username, role });

    return res.status(200).json({ token });
  };

  public validate = async (req: Request, res: Response) => {
    const { role } = req.body.user;
    return res.status(200).json({ role });
  };
}
