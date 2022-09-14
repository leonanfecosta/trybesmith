import connection from '../models/connection';
import UsersModel from '../models/users.model';
import { IUserCreate } from '../interfaces/users.interface';
import generateToken from '../helpers/generateToken';

export default class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async create(user: IUserCreate) {
    const userCreated = await this.model.create(user);
    const token = generateToken(user.username, userCreated.id);
    return token;
  }
}