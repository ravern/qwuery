import { IQueryObject } from "./types";

export const encode = (queryObject: IQueryObject): string => {
  if (Object.keys(queryObject).length === 0) {
    return "";
  }

  const queryArray = [];

  for (const key in queryObject) {
    const value = queryObject[key];

    if (typeof value === "string") {
      queryArray.push(`${key}=${value}`);
    } else {
      for (const nestedKey in value) {
        const nestedValue = value[nestedKey];
        queryArray.push(`${key}[${nestedKey}]=${nestedValue}`);
      }
    }
  }

  return `?${queryArray.join("&")}`;
};
