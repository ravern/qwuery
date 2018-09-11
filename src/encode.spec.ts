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

  it("successfully encodes a deeply nested object", () => {
    const queryObject = {
      one: {
        two: {
          three: "one",
        },
      },
    };
    const queryString = "?one[two][three]=one";
    expect(encode(queryObject)).toEqual(queryString);
  });

  it("successfully encodes a deeply nested object with multiple values", () => {
    const queryObject = {
      one: {
        two: {
          three: "three",
          four: "two",
        },
        five: "one",
      },
    };
    const queryString =
      "?one[two][three]=three&one[two][four]=two&one[five]=one";
    expect(encode(queryObject)).toEqual(queryString);
  });

  it("successfully encodes a simple object with array value", () => {
    const queryObject = {
      one: ["three", "four"],
      two: "two",
      three: "one",
    };
    const queryString = "?one=three,four&two=two&three=one";
    expect(encode(queryObject)).toEqual(queryString);
  });
});
