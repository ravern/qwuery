import { encode } from "../src";

describe("encode", () => {
  it("successfully encodes an empty object", () => {
    expect(encode({})).toEqual("");
  });
});
