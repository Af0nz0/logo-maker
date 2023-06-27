const Shape = require("./shape");

class Circle extends Shape {
  render() {
    const radius = 50;
    const centerX = 150;
    const centerY = 100;
    return `<circle cx="${centerX}" cy="${centerY}" r="${radius}" fill="${this.color}" />`;
  }
}

module.exports = Circle;
