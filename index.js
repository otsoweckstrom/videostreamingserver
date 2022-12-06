const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  databases: 'moviedatabase',
});

app.get('/', (req, res) => {
  const sqlInsert = "INSERT INTO movies (moviename) VALUES ('Shrek');";
  db.query(sqlInsert, (req, result) => {
    res.send('hello world');
  });
});

app.listen(3001, () => {
  console.log('running on port 3001');
});
