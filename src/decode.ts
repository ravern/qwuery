import { IQueryObject } from "./types";

export const decode = (queryString: string): IQueryObject => {
  if (queryString === "") {
    return {};
  }

  const queryObject: IQueryObject = {};
  const keyValueStrings = queryString.slice(1).split("&");
  for (const keyValueString of keyValueStrings) {
    const [keyString, value] = keyValueString.split("=");
    queryObject[keyString] = value;
  }
  return queryObject;
};
