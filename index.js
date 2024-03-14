require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./app/router');

app.use(express.json());

// pour réagir aux formulaires, on rajoute ce middleware
app.use(express.urlencoded({ extended: true }));

//app.use(cors());

app.use(router);

app.set('views', './views');
app.set('views', path.join(__dirname,'app', 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
