const Shape = require("./shape");

class Square extends Shape {
  render() {
    const size = 100;
    const x = 100;
    const y = 50;
    return `<rect x="${x}" y="${y}" width="${size}" height="${size}" fill="${this.color}" />`;
  }
}

module.exports = Square;
