import { Router } from 'express';
import validateLogin from '../middlewares/validateLogin';
import LoginController from '../controllers/LoginController';
import { verifyToken } from '../middlewares/jwt';

const loginController = new LoginController();
const routerLogin = Router();

routerLogin.post('/', validateLogin, loginController.login);
routerLogin.get('/validate', verifyToken, loginController.validate);

export default routerLogin;
