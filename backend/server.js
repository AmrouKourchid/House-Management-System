const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;
app.use(bodyParser.json());

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
  res.redirect('/Login');
});

// serve the login page
app.get('/Login', (req, res) => {
  res.send('This is the login page');
});

// handle login form submission
app.post('/Login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  connection.query(sql, [email, password], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    return res.status(200).json({ message: 'Login successful' });
  });
});

app.post('/Signup', (req, res) => {
  const { email, password } = req.body;
  const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
  const values = [email, password];
  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Error inserting user:', error);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }
    console.log('User inserted:', results);
    res.status(200).json({ message: 'User created successfully' });
  });
});

app.get('/workers/:category', (req, res) => {
  const { category } = req.params;
  const sql = `SELECT * FROM workers WHERE category = '${category}'`;
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error retrieving providers:', err);
      res.status(500).json({ message: 'Internal server error.' });
      return;
    }
    res.json(results);
  });
});

app.post("/checkUser", (req, res) => {
  const { email } = req.body;
  const query = "SELECT COUNT(*) AS count FROM users WHERE email = ?";

  connection.query(query, [email], (error, results) => {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    } else {
      const count = results[0].count;
      res.json({ existing: count > 0 });
    }
  });
});



app.post('/addWorker', (req, res) => {
  const { name, category, cellPhone, addressUser, email, password } = req.body;

  // check if worker with same cellPhone or addressUser already exists
  const checkQuery = 'SELECT * FROM workers WHERE email = ?';
  connection.query(checkQuery, [email], (checkErr, checkResults) => {
    if (checkErr) {
      console.error('Error checking for existing worker:', checkErr);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }

    if (checkResults.length > 0) {
      console.error('Worker with the same number or address already exists');
      res.status(400).json({ message: 'Worker with the same number or address already exists' });
      return;
    }

    // insert new worker if check passes
    const insertQuery = 'INSERT INTO workers (name, category, cellPhone, addressUser, email, password) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [name, category, cellPhone, addressUser, email, password];
    connection.query(insertQuery, values, (insertErr, insertResults) => {
      if (insertErr) {
        console.error('Error inserting worker:', insertErr);
        res.status(500).json({ message: 'Internal server error' });
        return;
      }
      console.log('Worker inserted:', insertResults);
      res.status(200).json({ message: 'Worker created successfully' });
    });
  });
});




// Endpoint for submitting a rating
app.post("/api/ratings", (req, res) => {
 
  const { workerId, rating } = req.body;
  const query1=`select * from workers where id=  ${workerId} ;`
  var test=""
  results=connection.query(query1,(err, result) =>{
    ratingg=result[0]["rating"]
    nbrating=result[0]["nbrating"]

    if (!workerId || !rating) {
      return res.status(400).json({ error: "Worker ID and rating are required." });
    }
  
    // Perform database operation to update the worker's rating
   
    const query = "UPDATE workers SET rating = ? , nbrating= ? WHERE id = ?;";
    const values = [((ratingg*nbrating+rating)/(nbrating+1)),nbrating+1, workerId];
  
    connection.query(query, values, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: "An error occurred while updating the rating." });
      }
  
      if (results.affectedRows === 0) {
        return res.status(404).json({ error: "Worker not found." });
      }
  
      res.json({ message: "Rating submitted successfully." });
    });
  });
  // Validate input
 
});




// Handle the POST request to update the user's profile
app.post('/update-profile', (req, res) => {
  const { email, newEmail, password, newPassword } = req.body;

  // Check if the email and password match a user in the database
  const checkUserQuery = `SELECT * FROM users WHERE email = ? AND password = ?`;
  connection.query(checkUserQuery, [email, password], (err, results) => {
    if (err) {
      console.error('Error executing query: ', err);
      res.status(500).json({ error: 'An error occurred. Please try again later.' });
    } else if (results.length === 0) {
      res.status(401).json({ error: 'Invalid email or password.' });
    } else {
      // Update the user's email and password in the database
      const updateUserQuery = `UPDATE users SET email = ?, password = ? WHERE email = ?`;
      connection.query(updateUserQuery, [newEmail, newPassword, email], (err, updateResult) => {
        if (err) {
          console.error('Error executing query: ', err);
          res.status(500).json({ error: 'An error occurred. Please try again later.' });
        } else {
          res.status(200).json({ message: 'Profile updated successfully.' });
        }
      });
    }
  });
});










// start the server
app.listen(port, () => {
  console.log(`Server listening at http://172.20.10.8:${port}`);
});