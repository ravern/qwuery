import { decode } from "./decode";

describe("decode", () => {
  it("successfully decodes an empty string", () => {
    const queryString = "";
    const queryObject = {};
    expect(decode(queryString)).toEqual(queryObject);
  });

  it("successfully decodes a simple string", () => {
    const queryString = "?one=three&two=two&three=one";
    const queryObject = {
      one: "three",
      two: "two",
      three: "one",
    };
    expect(decode(queryString)).toEqual(queryObject);
  });
});
