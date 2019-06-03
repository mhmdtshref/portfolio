const path = require('path');
const express = require('express');

const app = express();

const router = require('./router');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'client', 'dist', 'client')));
app.use(router);

app.get('/*', (req, res) => res.sendfile(path.join(__dirname, '..')));

module.exports = app;
