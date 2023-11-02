const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Your routes and other middleware here...

// Sample route that triggers an error
app.get('/example', (req, res, next) => {
  try {
    // Simulate an error (e.g., accessing an undefined variable)
    const data = nonExistentVariable;
    res.json(data);
  } catch (err) {
    next(err); // Pass the error to the error handling middleware
  }
});

// Error handling middleware - This should be defined after your routes and other middleware.
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging purposes
  res.status(500).json({ error: 'Something went wrong!' }); // Send an error response to the client
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
/* mkdir express-login-form
cd express-login-form
npm init -y
npm install express
node app.js
my-express-app/
  ├── app.js
  ├── public/
  |     ├── index.html
  ├── node_modules/
  ├── package.json
  └── package-lock.json
localhost:4000/login.html
*/
