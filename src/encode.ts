import { IQueryObject } from "./types";

export const encode = (queryObject: IQueryObject): string => {
  if (Object.keys(queryObject).length === 0) {
    return "";
  }

  const queryArray: string[] = [];
  encodeToArray(queryArray, [], queryObject);
  return `?${queryArray.join("&")}`;
};

const encodeToArray = (
  queryArray: string[],
  parentKeys: string[],
  queryObject: IQueryObject,
) => {
  for (const key in queryObject) {
    const keys = [...parentKeys, key];
    const value = queryObject[key];

    if (typeof value === "string") {
      const keysString = createKeysString(keys);
      queryArray.push(`${keysString}=${value}`);
    } else {
      encodeToArray(queryArray, [...parentKeys, key], value);
    }
  }
};

const createKeysString = (keys: string[]): string => {
  return keys
    .map((key, i) => {
      if (i === 0) {
        return key;
      }
      return `[${key}]`;
    })
    .join("");
};
