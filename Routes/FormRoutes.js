import express from 'express';
import path from 'path';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import multer from 'multer';

import { FormDatas, sendMail } from '../Controllers/FormDataController';

import { appendFile } from 'fs';

const FormRouter = express.Router();

const __dirname = dirname(fileURLToPath(import.meta.url));

const UPLOAD_PATH = join(__dirname, '../', './upload');

const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, UPLOAD_PATH);
	},
	filename(req, file, cb) {
		cb(
			null,
			`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
		);
	},
});

const checkFileType = (file, cb) => {
	const filetypes = /jpg|jpeg|png/;
	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	const mimetype = filetypes.test(file.mimetype);

	if (extname && mimetype) {
		return cb(null, true);
	} else {
		cb('Images only!');
	}
};

const upload = multer({
	storage,
	fileFilter: function (req, file, cb) {
		checkFileType(file, cb);
	},
});

FormRouter.route('/form-data').post(
	upload.fields([{ name: 'DropYourCV' }]),
	FormDatas
);
FormRouter.get('/sendEmail', sendMail);
export default FormRouter;
