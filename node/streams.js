const fs = require('fs');

// Create a readable stream to read from an input file
const readableStream = fs.createReadStream('input.txt');

// Create a writable stream to write to an output file
const writableStream = fs.createWriteStream('output.txt');

// Pipe the data from the readable stream to the writable stream
readableStream.pipe(writableStream);

// Handle errors
readableStream.on('error', (err) => {
  console.error('Error reading from the input file:', err);
});

writableStream.on('error', (err) => {
  console.error('Error writing to the output file:', err);
});

writableStream.on('finish', () => {
  console.log('Data copying completed.');
});
