import { Request, Response, NextFunction } from 'express';

export default function loginMiddleware(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;
  if (!username || username.length === 0) {
    return res.status(400).json({ message: '"username" is required' });
  }
  if (!password || password.length === 0) {
    return res.status(400).json({ message: '"password" is required' });
  }
  return next();
}