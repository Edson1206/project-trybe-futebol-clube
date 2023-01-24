import bcrypt = require('bcryptjs');
import Users from '../database/models/Users';
import ILogin from '../interfaces/Login';

export default class LoginService {
  public login = async (login: ILogin) => {
    const { email, password } = login;

    const user = await Users.findOne({ where: { email } });
    if (!user) return undefined;

    const result = await bcrypt.compare(password, user.password);
    if (!result) return undefined;

    return user;
  };
}
