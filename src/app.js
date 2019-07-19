const path = require('path');
const express = require('express');
const fallback = require('express-history-api-fallback');

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
  authRouter,
} = require('./router/');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/section', sectionRouter);
app.use('/api/card', cardRouter);
app.use('/api/contactUs', contactUsRouter);
app.use('/api/social', socialRouter);

app.use('/api/project', projectRouter);
app.use('/api/service', serviceRouter);
app.use('/api/technology', technologyRouter);
app.use('/api/language', languageRouter);
app.use('/api/auth', authRouter);


const adminRoot = path.join(__dirname, '..', 'admin', 'dist', 'admin');
const clientRoot = path.join(__dirname, '..', 'client', 'dist', 'client');

app.use('/admin', express.static(adminRoot));
app.use('/admin', fallback('index.html', { root: adminRoot }));

app.use('', express.static(clientRoot));
app.use('', fallback('index.html', { root: clientRoot }));


app.get('/*', (req, res) => res.sendfile(path.join(__dirname, '..')));

module.exports = app;
