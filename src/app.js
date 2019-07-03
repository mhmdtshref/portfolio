const path = require('path');
const express = require('express');

const app = express();

const { sectionRouter, cardRouter, contactUsRouter, socialRouter } = require('./router/');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'client', 'dist', 'client')));

app.use('/api/section', sectionRouter);
app.use('/api/card', cardRouter);
app.use('/api/contactUs', contactUsRouter);
app.use('/api/social', socialRouter);

app.get('/*', (req, res) => res.sendfile(path.join(__dirname, '..')));

module.exports = app;
