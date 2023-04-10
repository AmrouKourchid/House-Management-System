const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'zaineb',
  password: 'Zaineb.damak30',
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

const app = express();

app.use(express.json());

app.get('/', (req, res) =>{
    res.send('3000')
});

app.post('/',(req,res)=> {
    res.status(200).json({
        sucess: true,
        msg: req.body.msg,
    });
});


const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log('listening on port '+ port));
