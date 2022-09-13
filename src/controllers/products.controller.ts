import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) {}

  public create = async (req: Request, res: Response): Promise<Response> => {
    const product = req.body;
    const result = await this.productsService.create(product);
    return res.status(201).json(result);
  };

  public getAll = async (req: Request, res: Response): Promise<Response> => {
    const result = await this.productsService.getAll();
    return res.status(200).json(result);
  };
}