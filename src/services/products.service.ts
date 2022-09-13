import connection from '../models/connection';
import ProductsModel from '../models/products.model';
import { IProductCreate } from '../interfaces/products.interface';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async create(product: IProductCreate): Promise<IProductCreate> {
    const result = await this.model.create(product);
    return result;
  }
}