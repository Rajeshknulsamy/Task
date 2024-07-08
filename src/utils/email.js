const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.sendVerificationEmail = async (email, token) => {
  const url = `${process.env.CLIENT_URL}/verify-email/${token}`;
  await transporter.sendMail({
    to: email,
    subject: 'Verify your email',
    html: `Click <a href="${url}">here</a> to verify your email.`,
  });
};

exports.sendResetEmail = async (email, token) => {
  const url = `${process.env.CLIENT_URL}/reset-password/${token}`;
  await transporter.sendMail({
    to: email,
    subject: 'Password Reset',
    html: `Click <a href="${url}">here</a> to reset your password.`,
  });
};
