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

    let values: string[] | IQueryObject;
    if (typeof value === "string") {
      values = [value];
    } else {
      values = value;
    }

    if (values instanceof Array) {
      const keysString = createKeysString(keys);
      const valuesString = values.map(encodeURIComponent).join(",");
      queryArray.push(`${keysString}=${valuesString}`);
    } else {
      encodeToArray(queryArray, [...parentKeys, key], values);
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
