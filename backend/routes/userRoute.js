import express from 'express'
import { registerUser, userLogIn } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register' , registerUser);

userRouter.post('/login' , userLogIn);

export default userRouter;