const connection = require('./client')

// establishes a connection with the game server


console.log("Connecting ...");
// setupInput(connection.connect())




const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
};
setupInput(connection.connect())
// setupInput()

