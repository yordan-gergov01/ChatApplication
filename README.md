# 💬 TCP Chat Room with Node.js

A simple terminal-based chat room application built using Node.js and the `net` and `readline` modules. This project demonstrates how to create a basic multi-user chat server and client using TCP sockets, enabling real-time communication between users.

## Features

- Real-time message broadcasting to all connected users
- Unique user IDs for every client
- Notifies when a user joins or leaves
- Command-line interface using `readline/promises`
- Clean message display using `process.stdout.moveCursor` and `clearLine`


## How to Use

1. Start the server
   node server.js

2. Start a client
   node client.js


## Example

Terminal 1:
> Your id is 1!
> User 2 joined!
> User 2: Hello!

Terminal 2:
> Your id is 2!
> User 1: Hello there!


## Key Concepts

- **TCP sockets:** Used for two-way communication over a network.

- **Streams:** Each client has a socket stream for reading and writing.

- **Event-driven architecture:** Listens for events such as data, connection, error, and end.


## Notes

- This application runs locally by default (127.0.0.1:3008). You can change the IP and port as needed in the source code.

- No user authentication or message history is implemented. This is a basic learning project for networking with Node.js.
