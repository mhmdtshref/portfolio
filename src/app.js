const path = require('path');
const express = require('express');

const app = express();

const {
  sectionRouter,
  cardRouter,
  contactUsRouter,
  socialRouter,
  projectRouter,
  serviceRouter,
  technologyRouter,
  languageRouter,
} = require('./router/');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/admin', express.static(path.join(__dirname, '..', 'admin', 'dist', 'admin')));
app.use('', express.static(path.join(__dirname, '..', 'client', 'dist', 'client')));

app.use('/api/section', sectionRouter);
app.use('/api/card', cardRouter);
app.use('/api/contactUs', contactUsRouter);
app.use('/api/social', socialRouter);

app.use('/api/project', projectRouter);
app.use('/api/service', serviceRouter);
app.use('/api/technology', technologyRouter);
app.use('/api/language', languageRouter);


app.get('/*', (req, res) => res.sendfile(path.join(__dirname, '..')));

module.exports = app;
