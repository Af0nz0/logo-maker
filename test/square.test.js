const Square = require("../src/square");

describe("Square", () => {
  test("render() returns the SVG code for a square", () => {
    const square = new Square();
    square.setColor("green");
    const expectedSVG =
      '<rect x="100" y="50" width="100" height="100" fill="green" />';
    expect(square.render()).toBe(expectedSVG);
  });
});
