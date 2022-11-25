import nodemailer from "nodemailer";
const node_mailer = (options) => {
  const { name, email, phoneNo, url, description } = options;
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "safiullah.eb19102107@gmail.com",
      pass: "dlgdfeihgiufmahz",
    },
  });
  return transporter.sendMail({
    from: "safiullahrafeeq77777@gmail.com",
    to: "safiullahrafeeq7777@gmail.com",
    subject: "Sending it from Heroku",
    html: `
		<div>
			<h4>name: <span style="color:blue;">${name}</span></h4>
			<h4>email: <span style="color:blue;">${email}</span></h4>
			<h4>phone-no: <span style="color:blue;">${phoneNo}</span></h4>
			<h4>website url: <span style="color:blue;">${url}</span></h4>
			<p>description: <span style="color:blue;">${description}</span></p>
		</div>
		`,
  });
};
export default node_mailer;
