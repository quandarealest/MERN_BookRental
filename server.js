const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const app = express();

//body parser middleware
app.use(bodyParser.json());

mongoose
  .connect("mongodb+srv://mern-r62ik.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: 'quan',
    pass: 'buiquan1997'
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.listen(port, () => console.log(`Server started on port ${port}`));