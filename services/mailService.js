import nodemailer from "../utils/nodemailer";

const sendEmail = ({ from, to, subject, text }) => {
  let mailDetails = {
    from,
    to,
    subject,
    text,
  };

  nodemailer.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs");
    } else {
      console.log("Email sent successfully");
      return data;
    }
  });
};
export { sendEmail };
