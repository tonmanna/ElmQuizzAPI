var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");

exports.transporter = nodemailer.createTransport(
  smtpTransport({
    host: "smtp.mailchannels.net",
    port: 25,
    auth: {
      user: "itopplus",
      pass: "wcNHReaU8MeTuIyS9lzlXPZd",
    },
  })
);
