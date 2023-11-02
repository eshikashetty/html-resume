const express = require('express');
const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the "public" directory

// Route for handling form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check the username and password (you should implement your own authentication logic here)
  if (username === 'your_username' && password === 'your_password') {
    res.send('Login successful');
  } else {
    res.send('Login failed');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
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
