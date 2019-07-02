const Mailer = require('nodemailer');
require('env2')('config.env');

const transporter = Mailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.SMTP_USER,
    clientId: process.env.SMTP_CLIENT_ID,
    clientSecret: process.env.SMTP_CLIENT_SECRET,
    refreshToken: process.env.SMTP_REFRESH_TOKEN,
    accessToken: process.env.SMTP_ACCESS_TOKEN,
  },
});

module.exports = transporter;
