import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import FormRouter from './Routes/FormRoutes';
dotenv.config();
await connectDB();
const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());

//Routes
app.use('/api/form', FormRouter);

app.use(cors('*'));
app.use(cookieParser());

const server = app.listen(PORT, console.log(`Server running on port ${PORT} `));

process.on('unhandledRejection', (err, promise) => {
	console.log(`logged error: ${err}`);
	server.close(() => process.exit(1));
});
