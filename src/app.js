const path = require('path');
const express = require('express');

const app = express();

const { sectionRouter, cardRouter } = require('./router/');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'client', 'dist', 'client')));

app.use('/section', sectionRouter);
app.use('/card', cardRouter);

app.get('/*', (req, res) => res.sendfile(path.join(__dirname, '..')));

module.exports = app;
