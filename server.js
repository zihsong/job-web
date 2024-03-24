import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
// setup express backend
const app = express();

// setup middle ware
import morgan from 'morgan';

import mongoose from 'mongoose';
import jobRouter from './routes/jobRouter.js';


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello world');
});

app.post('/', (req, res) => {
    console.log(req);
    res.json({ message: 'data received', data: req.body });
})

app.use('/api/v1/jobs', jobRouter)

// not found middleware
app.use('*', (req, res) => {
    res.status(404).json({ msg: "not found" });
});

// error middleware
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ msg: 'something went wrong' });
});

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