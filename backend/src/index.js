const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect(
    "mongodb+srv://alifilho:aomc020702@mongo-crud-u3q8x.mongodb.net/test?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
  
app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', routes);

app.listen(3333);