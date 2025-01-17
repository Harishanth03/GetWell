import express from 'express';

import cors from 'cors';

import dotenv from 'dotenv';

import connectCloudinary from './config/Cloudinary.js';

dotenv.config();

import connectDatabase from './config/mongooDb.js';

import adminRouter from './routes/adminRoute.js';
import doctorRouter from './routes/doctorRoute.js';
import userRouter from './routes/userRoute.js';

//================================================ App Config ================================================

const app = express();

const PORT = process.env.PORT || 4000;

connectDatabase();

connectCloudinary();

//================================================ Middleware ================================================

app.use(express.json());

app.use(cors());

//================================================ API Endpoints ================================================

app.get('/', (req , res) => res.status(200).send('Server is running'));

app.use('/api/admin' , adminRouter) //localhost:4000/api/admin/add-doctor

app.use('/api/doctor' , doctorRouter);

app.use('/api/user' , userRouter);

//================================================ Listener ================================================

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
