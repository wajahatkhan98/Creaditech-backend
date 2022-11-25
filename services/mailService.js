import nodemailer from 'nodemailer';
import node_mailer from '../utils/nodemailer';
const sendEmail = (options) => {
	return node_mailer(options);
};
export { sendEmail };
