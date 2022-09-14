import { Request, Response } from 'express';
import OrderController from '../services/order.service';

export default class OrderRoutes {
  constructor(private orderController = new OrderController()) {}

  public getAllOrders = async (req: Request, res: Response): Promise<Response> => {
    const orders = await this.orderController.getAllOrders();
    return res.status(200).json(orders);
  };
}