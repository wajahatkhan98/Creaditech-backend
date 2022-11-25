const nodemailer = require("nodemailer");
const nodemailer = () => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'creaditecsafiullah@gmail.com',
        pass: 'january29011999OK'
    }
});
  return transporter;
};
export default nodemailer;