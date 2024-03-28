import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
// setup express backend
const app = express();

// setup middle ware
import morgan from 'morgan';
import mongoose from 'mongoose';

// import routers
import jobRouter from './routes/jobRouter.js';
import authRouter from './routes/authRouter.js'

import cookieParser from 'cookie-parser';
app.use(cookieParser());

import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { body, validationResult } from 'express-validator';

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json())

import { authenticateUser } from './middleware/authMiddleware.js';


app.get('/', (req, res) => {
    res.send('hello world');
});


app.use('/api/v1/jobs', authenticateUser, jobRouter);
app.use('/api/v1/auth', authRouter)

// not found middleware
app.use('*', (req, res) => {
    res.status(404).json({ msg: "not found" });
});

// error middleware
app.use(errorHandlerMiddleware);


const port = process.env.PORT || 5100;
try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
        console.log(`server running on PORT ${port}....`);
    });
} catch (error) {
    console.log(error);
    process.exit(1);
}