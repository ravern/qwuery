import { IDecodeOptions, InvalidKeyStringError, IQueryObject } from "./types";

export const decode = (
  queryString: string,
  options: IDecodeOptions = {},
): IQueryObject => {
  if (queryString === "") {
    return {};
  }

  const queryObject: IQueryObject = {};

  const keyValueStrings = queryString.slice(1).split("&");
  for (const keyValueString of keyValueStrings) {
    const [keyString, valueString] = keyValueString.split("=");

    let keys = decodeKeyString(keyString);
    const lastKey = keys.slice(keys.length - 1)[0];
    keys = keys.slice(0, keys.length - 1);

    let values: string | string[] = valueString.split(",");
    if (!options.alwaysArrays && values.length === 1) {
      values = values[0];
    }

    let nestedQueryObject = queryObject;
    for (const key of keys) {
      if (!nestedQueryObject[key]) {
        nestedQueryObject[key] = {};
      }
      nestedQueryObject = nestedQueryObject[key] as IQueryObject;
    }
    nestedQueryObject[lastKey] = values;
  }

  return queryObject;
};

const decodeKeyString = (keyString: string): string[] => {
  let keys: Array<string | null> = [""];
  let foundOpenBracket = false;

  for (const char of keyString.split("")) {
    switch (char) {
      case "]":
        keys.push(null);
        break;
      case "[":
        if (!foundOpenBracket) {
          keys.push(null);
          foundOpenBracket = true;
        }
        keys[keys.length - 1] = "";
        break;
      default:
        if (keys[keys.length - 1] === null) {
          throw new InvalidKeyStringError(keyString);
        }
        keys[keys.length - 1] += char;
        break;
    }
  }

  if (keys[keys.length - 1] === null) {
    keys = keys.slice(0, keys.length - 1);
  } else if (foundOpenBracket) {
    throw new InvalidKeyStringError(keyString);
  }

  return keys as string[];
};
