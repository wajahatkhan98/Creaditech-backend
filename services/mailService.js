import nodemailer from 'nodemailer';
import node_mailer from '../utils/nodemailer';
const sendEmail = ({ from, to, subject, text }) => {
	let mailDetails = {
		from: 'safiullah.eb19102107@gmail.com',
		to: 'creaditecsafiullah@gmail.com',
		subject: 'hello',
		text: 'hello',
	};

	return node_mailer();
};
export { sendEmail };
