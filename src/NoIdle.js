const robot = require('robotjs');

function delay(delayInms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}

async function start() {
  console.log('Start');
  robot.setMouseDelay(2);

  // let mouse = robot.getMousePos();
  const screenSize = robot.getScreenSize();
  const screenMiddle = { x: screenSize.width / 2, y: screenSize.height / 2 };

  while (true) {
    for (let x = screenMiddle.x - 50; x < screenMiddle.x + 50; x++) {
      robot.moveMouse(x, screenMiddle.y);
    }
    await delay(10000);
  }
}

start();
