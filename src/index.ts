export interface IQueryObject {
  [key: string]: string;
}

export const encode = (queryObject: IQueryObject): string => {
  if (Object.keys(queryObject).length === 0) {
    return "";
  }

  const queryArray = [];
  for (const key in queryObject) {
    const value = queryObject[key];
    queryArray.push(`${key}=${value}`);
  }
  return `?${queryArray.join("&")}`;
};
