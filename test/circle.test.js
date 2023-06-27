const Circle = require("../src/circle");

describe("Circle", () => {
  test("render() returns the SVG code for a circle", () => {
    const circle = new Circle();
    circle.setColor("red");
    const expectedSVG = '<circle cx="150" cy="100" r="50" fill="red" />';
    expect(circle.render()).toBe(expectedSVG);
  });
});
