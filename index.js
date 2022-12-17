const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')

//create three separate database connections
const db1 = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'moviedatabase1',
})
const db2 = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'moviedatabase2',
})
const db3 = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'moviedatabase3',
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Get movies and series by querying for /api/get/[country]/[movies or series]
app.get('/api/get/finland/movies', (req, res) => {
    const sqlSelect = 'SELECT * FROM movie'
    db1.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.get('/api/get/finland/series', (req, res) => {
    const sqlSelect = 'SELECT * FROM series'
    db1.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.get('/api/get/spain/movies', (req, res) => {
    const sqlSelect = 'SELECT * FROM movie'
    db2.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})
app.get('/api/get/spain/series', (req, res) => {
    const sqlSelect = 'SELECT * FROM series'
    db2.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})
app.get('/api/get/usa/movies', (req, res) => {
    const sqlSelect = 'SELECT * FROM movie'
    db3.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})
app.get('/api/get/usa/series', (req, res) => {
    const sqlSelect = 'SELECT * FROM series'
    db3.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

//posting left unfinished since no functionality needs it
app.post('/api/insert', (req, res) => {
    db1.query()
})

app.listen(3001, () => {
    console.log('running on port 3001')
})
