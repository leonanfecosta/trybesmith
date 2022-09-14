import { Pool } from 'mysql2/promise';
import { IUserCreate } from '../interfaces/users.interface';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async verifyUser(
    username: string,
    password: string,
  ): Promise<IUserCreate> {
    const query = `
    SELECT id, username, password
    FROM Trybesmith.Users
    WHERE username = ? AND password = ?`;

    const [rows] = await this.connection.execute(query, [username, password]);
    const [user] = rows as IUserCreate[];
    return user;
  }
}
