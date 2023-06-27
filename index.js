const readline = require("readline");
const fs = require("fs");
const Triangle = require("./src/triangle");
const Circle = require("./src/circle");
const Square = require("./src/square");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptUser(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function generateLogo() {
  const text = await promptUser("Enter the text (up to three characters): ");
  const textColor = await promptUser(
    "Enter the text color (color keyword or hexadecimal number): "
  );
  const shapeChoice = await promptUser(
    "Choose a shape (triangle, circle, square): "
  );
  const shapeColor = await promptUser(
    "Enter the shape color (color keyword or hexadecimal number): "
  );

  let shape;
  if (shapeChoice === "triangle") {
    shape = new Triangle();
  } else if (shapeChoice === "circle") {
    shape = new Circle();
  } else if (shapeChoice === "square") {
    shape = new Square();
  } else {
    console.log("Invalid shape choice.");
    rl.close();
    return;
  }

  shape.setColor(shapeColor);

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shape.render()}
      <text x="150" y="100" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  fs.writeFileSync("logo.svg", svg);
  console.log("Generated logo.svg");
  rl.close();
}

generateLogo();
