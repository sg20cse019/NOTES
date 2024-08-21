const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./model'); 

const app = express();
const port = 5000; 

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/USERS', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/submitform', (req, res) => {
  const userData = new User(req.body);
  userData
    .save()
    .then(() => {
      console.log('User saved successfully');
      res.status(200).json({ message: 'User saved successfully' });
    })
    .catch((error) => {
      console.error('Error saving user:', error);
      res.status(500).json({ error: 'Error saving user' });
    });
});

app.listen(port, () => {
  console.log(`Server has started at port ${port}`);
});
