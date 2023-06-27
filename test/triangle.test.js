const Triangle = require("../src/triangle");

describe("Triangle", () => {
  test("render() returns the SVG code for a triangle", () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    const expectedSVG =
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
    expect(triangle.render()).toBe(expectedSVG);
  });
});
