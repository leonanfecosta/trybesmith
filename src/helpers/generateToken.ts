import Jwt, { SignOptions } from 'jsonwebtoken';

export default (username: string, id: number) => {
  const jwtConfig:SignOptions = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };
  const jwtSecret = process.env.JWT_SECRET || 'secret';
  const token = Jwt.sign({ username, id }, jwtSecret, jwtConfig);
  return token;
};