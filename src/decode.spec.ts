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

  it("successfully decodes a simple nested object", () => {
    const queryString = "?one[three]=one&two=two";
    const queryObject = {
      one: {
        three: "one",
      },
      two: "two",
    };
    expect(decode(queryString)).toEqual(queryObject);
  });

  it("successfully decodes a deeply nested object", () => {
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

  it("successfully encodes a deeply nested object with multiple values", () => {
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

  it("successfully encodes a simple object with array value", () => {
    const queryString = "?one=three,four&two=two&three=one";
    const queryObject = {
      one: ["three", "four"],
      two: "two",
      three: "one",
    };
    expect(decode(queryString)).toEqual(queryObject);
  });

  it("successfully encodes a simple nested object with array value", () => {
    const queryString = "?one[three]=one,two&two=three";
    const queryObject = {
      one: {
        three: ["one", "two"],
      },
      two: "three",
    };
    expect(decode(queryString)).toEqual(queryObject);
  });

  it("successfully encodes a deeply nested object with array value", () => {
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
});
