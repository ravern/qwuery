import { greeting } from "../src";

describe("greeting", () => {
  it("greets to no one in paticular", () => {
    expect(greeting()).toEqual("Hello, world!");
  });

  it("greets the right person", () => {
    expect(greeting("John")).toEqual("Hello, John!");
  });
});
