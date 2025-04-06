const net = require("net");

const server = net.createServer();

// sockets are endpoints that can only communicate to each other, point A and B
// this way we keep track of the different clients
// every time someone sends a message we will check the array and send it to each client
// so everyone in the chat room can see it
const clients = [];

server.on("connection", (socket) => {
  console.log("A new connection to the server!");

  const clientID = clients.length + 1;
  socket.write(`id-${clientID}`);

  socket.on("data", (data) => {
    const dataString = data.toString("utf-8");
    const id = dataString.substring(0, dataString.indexOf("-"));
    const message = dataString.substring(dataString.indexOf("-message-") + 9);

    clients.map((client) => {
      client.socket.write(`> User ${id}: ${message}`);
    });
  });

  clients.push({ id: clientID.toString(), socket });
});

server.listen(3008, "127.0.0.1", () => {
  console.log("opened server on", server.address());
});
