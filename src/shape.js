class Shape {
  constructor() {
    this.color = null;
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    throw new Error("render method not implemented");
  }
}

module.exports = Shape;
