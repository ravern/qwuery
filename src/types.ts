export interface IQueryObject {
  [key: string]: string | string[] | IQueryObject;
}

export interface IDecodeOptions {
  alwaysArrays?: boolean;
}

export class InvalidKeyStringError extends Error {
  constructor(keyString: string) {
    super(`Invalid key string found: ${keyString}`);
  }
}

export class InvalidKeyValueStringError extends Error {
  constructor(keyValueString: string) {
    super(`Invalid key value string found: ${keyValueString}`);
  }
}

export class InvalidQueryStringError extends Error {
  constructor() {
    super("Invalid query string");
  }
}
