const net = require('net');

const pipeFilename = process.argv[2];

const client = net.createConnection(pipeFilename);

client.setEncoding('utf8');
client.setNoDelay(true);

client.on('data', function (msg) {
  console.log('child got data:', msg);
});

client.write("Hello from client!\n");
