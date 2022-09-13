import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser, IUserCreate } from '../interfaces/users.interface';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: IUser): Promise<IUserCreate> {
    const { username, classe, level, password } = user;
    const query = `
        INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?) 
      `;
    const [result] = await this.connection.execute<ResultSetHeader>(query, [
      username,
      classe,
      level,
      password,
    ]);
    const id = result.insertId;
    return { id, username, classe, level, password };
  }
}
