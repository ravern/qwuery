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

  it("successfully decodes a simple nested string", () => {
    const queryString = "?one[three]=one&two=two";
    const queryObject = {
      one: {
        three: "one",
      },
      two: "two",
    };
    expect(decode(queryString)).toEqual(queryObject);
  });

  it("successfully decodes a deeply nested string", () => {
    const queryString = "?one[two][three]=one";
    const queryObject = {
      one: {
        two: {
          three: "one",
        },
      },
    };
    expect(decode(queryString)).toEqual(queryObject);
  });

  it("successfully encodes a deeply nested string with multiple values", () => {
    const queryString =
      "?one[two][three]=three&one[two][four]=two&one[five]=one";
    const queryObject = {
      one: {
        two: {
          three: "three",
          four: "two",
        },
        five: "one",
      },
    };
    expect(decode(queryString)).toEqual(queryObject);
  });

  it("successfully encodes a simple string with array value", () => {
    const queryString = "?one=three,four&two=two&three=one";
    const queryObject = {
      one: ["three", "four"],
      two: "two",
      three: "one",
    };
    expect(decode(queryString)).toEqual(queryObject);
  });

  it("successfully encodes a simple nested string with array value", () => {
    const queryString = "?one[three]=one,two&two=three";
    const queryObject = {
      one: {
        three: ["one", "two"],
      },
      two: "three",
    };
    expect(decode(queryString)).toEqual(queryObject);
  });

  it("successfully encodes a deeply nested string with array value", () => {
    const queryString = "?one[two][three]=one,two";
    const queryObject = {
      one: {
        two: {
          three: ["one", "two"],
        },
      },
    };
    expect(decode(queryString)).toEqual(queryObject);
  });

  it("successfully decodes a simple string with alwaysArrays option", () => {
    const queryString = "?one=three&two=two&three=one";
    const options = {
      alwaysArrays: true,
    };
    const queryObject = {
      one: ["three"],
      two: ["two"],
      three: ["one"],
    };
    expect(decode(queryString, options)).toEqual(queryObject);
  });

  it("fails to decode a simple string without a question mark", () => {
    const queryString = "one=three&two=two&three=one";
    const message = "Invalid query string";
    expect(() => decode(queryString)).toThrow(message);
  });
});
