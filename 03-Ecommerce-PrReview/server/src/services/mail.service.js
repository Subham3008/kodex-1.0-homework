const transporter = require("../config/nodemailer")

const sendMail = async ({ to, subject, html }) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to,
      subject,
      html,
    })
    return info
  } catch (err) {
    console.log("Failed to send mail:", err);
    throw err
  }
}

module.exports = sendMail