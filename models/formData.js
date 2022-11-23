import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const formData = new Schema(
	{
		type: {
			type: String,
		},

		YourName: {
			type: String,
			required: true,
		},
		Phone: {
			type: Number,
		},
		Email: {
			type: String,
			required: true,
			unique: true,
			match: [
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				'please enter a valid email address',
			],
		},

		url: {
			type: String,
		},

		YourRole: {
			type: String,
			required: true,
		},

		DropYourCV: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: { createdAt: true, updatedAt: true },
	}
);

const FormData = mongoose.model('FormData', formData);

export default FormData;
