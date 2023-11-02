const fs = require('fs');

// File name and content
const fileName = 'example.txt';
const fileContent = 'This is the content of the new file.';

// Create the file
fs.writeFile(fileName, fileContent, (err) => {
  if (err) {
    console.error('Error creating the file:', err);
  } else {
    console.log(`File "${fileName}" created successfully.`);
  }
});
