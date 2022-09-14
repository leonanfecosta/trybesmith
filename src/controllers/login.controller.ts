import { Request, Response } from 'express';
import LoginService from '../services/login.service';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  public login = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;
    const result = await this.loginService.verifyUser(username, password);
    if (!result) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    return res.status(200).json({ token: result });
  };
}