export interface IQueryObject {
  [key: string]: string | string[] | IQueryObject;
}

export class InvalidKeyStringError extends Error {
  constructor(keyString: string) {
    super(`Invalid key string found: ${keyString}`);
  }
}
