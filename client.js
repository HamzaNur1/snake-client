const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: "50541"// PORT number here,
  });
conn.on('connect',()=> {
  console.log ('connection established');
  conn.write ("Name: ruby")
})
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data",(data)=> {
    console.log (data)
  })
console.log ("hey")
  return conn;
};
module.exports = {
  connect
}