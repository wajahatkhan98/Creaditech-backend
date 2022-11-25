import nodemailer from 'nodemailer';
const node_mailer = () => {
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		host: 'smtp.gmail.com',
		auth: {
			user: 'safiullah.eb19102107@gmail.com',
			pass: 'safi2701',
		},
	});
	return transporter.sendMail({
		from: 'safiullah.eb19102107@gmail.com',
		to: 'creaditecsafiullah@gmail.com',
		subject: 'Sending it from Heroku',
		text: "Hey, I'm being sent from the cloud",
	});
};
export default node_mailer;
