const fs = require('fs');

const oldFileName = 'input.txt';
const newFileName = 'newname.txt';

// Rename the file
fs.rename(oldFileName, newFileName, (err) => {
  if (err) {
    console.error(`Error renaming file: ${err}`);
  } else {
    console.log(`File "${oldFileName}" has been renamed to "${newFileName}"`);
  }
});
