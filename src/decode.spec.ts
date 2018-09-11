import { decode } from "./decode";

describe("decode", () => {
  it("successfully decodes an empty object", () => {
    const queryString = "";
    const queryObject = {};
    expect(decode(queryString)).toEqual(queryObject);
  });
});
