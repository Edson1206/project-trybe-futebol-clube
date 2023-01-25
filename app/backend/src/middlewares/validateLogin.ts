import { RequestHandler } from 'express';

const validateLogin: RequestHandler = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'All fields must be filled' });
  if (password.length < 6) {
    return res.status(422)
      .json({ message: '"password" length must be at least 6 characters long' });
  }
  next();
};

export default validateLogin;
