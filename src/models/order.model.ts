import { Pool } from 'mysql2/promise';
import { IOrder } from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<IOrder[]> {
    const query = `
    SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.Orders AS o
    JOIN Trybesmith.Products AS p
    ON o.id = p.orderId
    GROUP BY o.id
    ORDER BY o.userId`;
    
    const [rows] = await this.connection.execute(query);
    return rows as IOrder[];
  }
}
