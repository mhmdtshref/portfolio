const Mailer = require('../Utilities/mailer');

const send = (req, res) => {
  const {
    name, email, subject, message,
  } = req.body;
  Mailer.sendMail({
    from: email,
    to: 'mhmdtshref@gmail.com',
    subject,
    html: `<h1>Portfolio contact us email</h1><p>From: ${name}</p><p>Email: ${email}</p><p>Subject: ${subject}</p><p>Message: ${message}</p>`,
  }, (error) => {
    if (error) {
      res.json({ success: false, error: error.message });
    } else {
      res.json({ success: true });
    }
  });
};

module.exports = { send };
