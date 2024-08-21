const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const model = require('./model');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/user111')
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

app.post('/register', (req, res) => {
  const { name, phone, email, password } = req.body;
  const user = new model({
    name,
    phone,
    email,
    password
  });

  user.save()
    .then(() => res.send({ message: 'User registered successfully' }))
    .catch(err => res.status(500).send({ message: 'Registration failed', error: err }));
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  model.findOne({ email })
    .then(user => {
      if (!user) {
        console.log('User not found');
        return res.status(400).send({ message: 'User not found' });
      }
      if (user.password !== password) {
        console.log('Invalid credentials');
        return res.status(400).send({ message: 'Invalid credentials' });
      }
      console.log('Login successful');
      res.send({ message: 'Login successful' });
    })
    .catch(err => {
      console.error('Login failed', err);
      res.status(500).send({ message: 'Login failed', error: err });
    });
});

app.get('/users', (req, res) => {
  model.find()
    .then(users => res.send(users))
    .catch(err => res.status(500).send({ message: 'Error fetching users', error: err }));
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
