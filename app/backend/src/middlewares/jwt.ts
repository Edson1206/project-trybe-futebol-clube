import * as jwt from 'jsonwebtoken';

const JWT_SECRET = 'jwt_secret';

const createToken = (payload: object): string => {
  const token = jwt.sign(payload, JWT_SECRET);
  return token;
};

export default createToken;
