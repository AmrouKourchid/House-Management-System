const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();
const port = 3000;
app.use(cors());

// create a connection to your MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Taha@01022002',
  database: 'hms'
});

// connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database!');
  }
});

// set up middleware to parse request body
app.use(express.urlencoded({ extended: true }));

// redirect root path to login page
app.get('/', (req, res) => {
  res.redirect('/login');
});

// serve the login page
app.get('/login', (req, res) => {
  res.send('This is the login page');
});

// handle login form submission
app.post('/login', (req, res) => {
  // retrieve email and password from the request body
  const { email, password } = req.body;

  // construct a SQL query to retrieve the user with the given email and password
  const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;

  // execute the query
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
    } else if (results.length === 0) {
      // no user found with the given email and password
      res.status(401).send('Invalid email or password');
    } else {
      // user found with the given email and password
      res.send('Logged in successfully!');
    }
  });
});

// start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
