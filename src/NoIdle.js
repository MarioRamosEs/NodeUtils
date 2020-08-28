const robot = require("robotjs");

async function start() {
  console.log("Start");
  robot.setMouseDelay(2);
  let mouse = robot.getMousePos();

  while (true) {
    for (let x = mouse.x; x < mouse.x+100; x++) {
      robot.moveMouse(x, mouse.y);
    }
    await delay(10000);
  }
}

function delay(delayInms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}

start();
