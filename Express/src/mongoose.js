let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/College')
    .then(() => {console.log('DB Connected');})
    .catch((err) => {console.error('Connection error', err);});
