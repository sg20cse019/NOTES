const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const employee = require('./model');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/College')
    .then(() => { console.log('DB Connected'); })
    .catch((err) => { console.error('Connection error', err); });

app.get('/', (req, res) => {
    res.end('HOME-PAGE');
});

app.get('/login', (req, res) => {
    res.end('LOGIN-PAGE');
});

app.get('/api', (req, res) => {
    let data = [{ Newname: 'LOKI' }];
    res.json(data);
});

app.post('/submitform', (req, res) => {
    let data = new employee({ empName: req.body.Newname });
    data.save()
        .then(() => {
            console.log("data saved");
            res.status(200).send("Data saved");
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error saving data");
        });
});

app.listen(5000, (err) => {
    if (err) throw err;
    console.log('server is running');
});
