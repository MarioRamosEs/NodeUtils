const robot = require("robotjs");
const fs = require("fs");
const path = require("path");

async function start() {
  console.log("Inicio");
  const data = fs.readFileSync(
    path.resolve(__dirname, "../data/text.txt"),
    "UTF-8"
  );
  const lines = data.split(/\r?\n/);
  await delay(3000);
  lines.forEach((line) => {
    robot.typeString(line);
    robot.keyTap("enter");
  });
  console.log("Fin");
}

function delay(delayInms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}

start();
