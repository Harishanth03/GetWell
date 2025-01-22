import express from 'express'
import { getUser, registerUser, userLogIn } from '../controllers/userController.js';
import AuthUser from '../middlewares/AuthUser.js';

const userRouter = express.Router();

userRouter.post('/register' , registerUser);

userRouter.post('/login' , userLogIn);

userRouter.get('/get', AuthUser ,getUser);

export default userRouter;