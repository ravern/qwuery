import { encode } from "./encode";

describe("encode", () => {
  it("successfully encodes an empty object", () => {
    const queryObject = {};
    const queryString = "";
    expect(encode(queryObject)).toEqual(queryString);
  });

  it("successfully encodes a simple object", () => {
    const queryObject = {
      one: "three",
      two: "two",
      three: "one",
    };
    const queryString = "?one=three&two=two&three=one";
    expect(encode(queryObject)).toEqual(queryString);
  });

  it("successfully encodes a simple nested object", () => {
    const queryObject = {
      one: {
        three: "one",
      },
      two: "two",
    };
    const queryString = "?one[three]=one&two=two";
    expect(encode(queryObject)).toEqual(queryString);
  });
});
