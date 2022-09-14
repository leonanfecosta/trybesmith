import connection from '../models/connection';
import LoginModel from '../models/login.model';
import generateToken from '../helpers/generateToken';

export default class LoginService {
  public loginModel: LoginModel;

  constructor() {
    this.loginModel = new LoginModel(connection);
  }

  public async verifyUser(
    username: string,
    password: string,
  ) {
    const user = await this.loginModel.verifyUser(username, password);
    if (!user || user.password !== password) {
      return null;
    }
    const token = generateToken(user.username, user.id);
    return token;
  }
}