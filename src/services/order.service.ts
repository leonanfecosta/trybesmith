import connection from '../models/connection';
import OrderModel from '../models/order.model';
import { IOrder } from '../interfaces/order.interface';

export default class OrderController {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAllOrders(): Promise<IOrder[]> {
    const result = await this.model.getAllOrders();
    return result;
  }
}