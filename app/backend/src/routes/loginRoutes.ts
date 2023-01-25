import { Router } from 'express';
import validateLogin from '../middlewares/validateLogin';
import LoginController from '../controllers/LoginController';

const loginController = new LoginController();
const routerLogin = Router();

routerLogin.post('/login', validateLogin, loginController.login);

export default routerLogin;
