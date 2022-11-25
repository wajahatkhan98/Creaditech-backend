import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import FormData from '../models/formData';
import { sendEmail } from '../services/mailService';

const FormDatas = asyncHandler(async (req, res) => {
	const { DropYourCV } = req.files;

	console.log('first');
	console.log('first');
	console.log('first');
	console.log('first');
	console.log('first');

	console.log(req.files);

	const DropYourCV_FILENAME = DropYourCV[0]['filename'];

	res.json(req.files);

	req.body.DropYourCV = DropYourCV_FILENAME;

	const FormUser = new FormData(req.body);
	await FormUser.save();

	res
		?.status(201)
		.json({ status: true, massage: 'Files has been successfully uploaded' });
});
const sendMail = asyncHandler(async (req, res, next) => {
	console.log('hello',req.body);
	const data = await sendEmail(req.body);
	console.log(data);
	res.status(200).send({message:"sent"});
	return;
});
export { FormDatas, sendMail };
