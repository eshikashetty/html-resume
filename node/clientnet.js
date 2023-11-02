const net = require('net');

const client = new net.Socket();

const PORT = 8080;
const HOST = '127.0.0.1';

client.connect(PORT, HOST, () => {
  console.log(`Connected to the server at ${HOST}:${PORT}`);
  client.write('Client: Hello, Server!');
});

client.on('data', (data) => {
  console.log(`Received data from the server: ${data}`);
});

client.on('close', () => {
  console.log('Connection closed');
});
