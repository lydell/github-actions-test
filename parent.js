const { fork } = require("child_process");
const net = require('net');
const readline = require('readline');

const pipeFilename = `/tmp/elm_test-${process.pid}.sock`;

let child;
const server = net.createServer((socket) => {
  socket.setEncoding('utf8');
  socket.setNoDelay(true);

  // See the long note near client.write() in worker.js for why we do this.
  // It fixes a nasty bug!
  // https://nodejs.org/api/readline.html#example-read-file-stream-line-by-line
  var stream = readline.createInterface({
    input: socket,
    crlfDelay: Infinity,
  });

  stream.on('line', function (data) {
    console.log('parent got line:', data);
    // socket.write('Reply from parent\n');
    child.kill();
    server.close();
  });
});

server.on('listening', () => {
  child = fork('child.js', [pipeFilename]);
});

server.listen(pipeFilename);
