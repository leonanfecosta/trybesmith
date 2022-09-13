export interface IUser {
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface IUserCreate extends IUser {
  id: number;
}