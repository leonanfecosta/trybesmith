import Jwt, { SignOptions } from 'jsonwebtoken';

export default (username: string) => {
  const jwtConfig:SignOptions = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };
  const jwtSecret = process.env.JWT_SECRET || 'secret';
  const token = Jwt.sign({ username }, jwtSecret, jwtConfig);
  return token;
};