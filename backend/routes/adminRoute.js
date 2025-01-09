import express from 'express';

import { addDoctor, allDoctors, loginAdmin } from '../controllers/adminController.js';

import upload from '../middlewares/multer.js';

import AuthAdmin from '../middlewares/AuthAdmin.js';

const adminRouter = express.Router();

adminRouter.post('/add-doctor',AuthAdmin, upload.single('image') , addDoctor);

adminRouter.post('/login' , loginAdmin);

adminRouter.post('/all-doctors' ,AuthAdmin, allDoctors)

export default adminRouter;