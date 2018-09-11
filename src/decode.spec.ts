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

  it("successfully encodes a simple nested object", () => {
    const queryString = "?one[three]=one&two=two";
    const queryObject = {
      one: {
        three: "one",
      },
      two: "two",
    };
    expect(decode(queryString)).toEqual(queryObject);
  });
});
