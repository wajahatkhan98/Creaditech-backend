import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
// import connectDB from './config/db.js';
import formRouter from "./Routes/formRoutes";

dotenv.config();
// await connectDB();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors("*"));
app.use(cookieParser());
app.use(express.json());
//Routes
app.use('/api/forms', formRouter);
// app.use('/api/form',formRoute)
const server = app.listen(PORT, console.log(`Server running on port ${PORT} `));

process.on("unhandledRejection", (err, promise) => {
  console.log(`logged error: ${err}`);
  server.close(() => process.exit(1));
});
