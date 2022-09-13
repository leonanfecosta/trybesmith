export interface IProduct {
  name: string;
  amount: string;
}

export interface IProductCreate extends IProduct {
  id: number;
}
