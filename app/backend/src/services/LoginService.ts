import bcrypt = require('bcryptjs');
import Users from '../database/models/Users';
import ILogin from '../interfaces/Login';

export default class LoginService {
  public login = async (login: ILogin) => {
    const { email, password } = login;

    const findUser = await Users.findOne({ where: { email } });
    if (!findUser) return undefined;

    const result = await bcrypt.compare(password, findUser.password);
    if (!result) return undefined;

    return findUser;
  };
}
