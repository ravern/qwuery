import { encode } from "../src";

describe("encode", () => {
  it("successfully encodes an empty object", () => {
    const queryObject = {};
    const queryString = "";
    expect(encode(queryObject)).toEqual(queryString);
  });

  it("successfully encodes an simple object", () => {
    const queryObject = {
      one: "three",
      two: "two",
      three: "one",
    };
    const queryString = "?one=three&two=two&three=one";
    expect(encode(queryObject)).toEqual(queryString);
  });
});
