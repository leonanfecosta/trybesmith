import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct, IProductCreate } from '../interfaces/products.interface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: IProduct): Promise<IProductCreate> {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [result] = await this.connection.execute<ResultSetHeader>(
      query,
      [name, amount],
    );
    const id = result.insertId;
    return { id, name, amount };
  }

  public async getAll(): Promise<IProductCreate[]> {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [result] = await this.connection.execute(query);
    return result as IProductCreate[];
  }
}
