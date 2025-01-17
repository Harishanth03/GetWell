import validator from 'validator'
import userModel from '../models/userModel';
import bcrypt  from 'bcrypt';
import jwt from 'jsonwebtoken'

const registerUser = async(req , res) => 
{

    try 
    {

        const {name , email , password} = req.body;

        if(!email || !name || !password)
        {

            res.json({success:false , message:"Plase fill the user Data"});

        }

        if(!validator.isEmail(email))
        {

            res.json({success: false , message: "Please enter a valid email"});

        }

        const exisitingEmail = await userModel.find(email);
        
        if(exisitingEmail)
        {

            res.json({success:false , message:"This Email address already have an account"});

        }

        if(password.length < 8)
        {

            res.json({success:false , message:"Please Enter a valid password"});

        }

        const salt = await bcrypt.genSalt(10);

        const hashPassword = await bcrypt.hash(password , salt);

        const userData = {

            name,
            email,
            password : hashPassword

        }

        const newUser = new userModel(userData);

        const user = await newUser.save();

        const token = jwt.sign({id:user._id} , process.env.JWT_SECRET);

        res.json({success:true , token})

        
    } catch (error) 
    {

        console.log(error);

        res.json({success: false , message: error.message});   
        
    }

}

export {registerUser}