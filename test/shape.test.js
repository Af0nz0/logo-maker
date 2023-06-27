const Shape = require("../src/shape");

describe("Shape", () => {
  test("setColor() sets the color property", () => {
    const shape = new Shape();
    shape.setColor("blue");
    expect(shape.color).toBe("blue");
  });

  test("render() throws an error", () => {
    const shape = new Shape();
    expect(() => {
      shape.render();
    }).toThrowError("render method not implemented");
  });
});
