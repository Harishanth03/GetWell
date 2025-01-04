import validator from 'validator';

import bcrypt from 'bcrypt'

import {v2 as cloudinary} from 'cloudinary'

import doctorModel from '../models/doctorModel.js';


//==================================================== API for adding Doctor ==============================================

const addDoctor = async(req , res) => {

    try 
    {

        const {name , email , password , speciality , degree , experience, about , available , fees , address , date , slots_booked} = req.body;

        const imageFile = req.file;

        //================================================ Checking all the data ===============================================

        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address)
        {
            return res.json({success : false , message: "Missing Details"});
        }
        
        //================================================ Validate Email ======================================================

        if(!validator.isEmail(email))
        {
            return res.json({success : false , message: "Please Enter a valied Email"});
        }

        //================================================= Password Validator ================================================

        if(password.length < 8)
        {
            return res.json({success : false , message: "Password must be 8 charactor"})
        }

        //================================================== Hassing doctor password ========================================

        const salt = await bcrypt.genSalt(10)

        const hashedPassword = await bcrypt.hash(password , salt);

        //=================================================== Upload iMage to cloadnery =====================================

        const imageUpload = await cloudinary.uploader.upload(imageFile.path , {resource_type:"image"});

        const imageUrl = imageUpload.secure_url;


        //========================================= add the doctor data into the database ==================================

        const doctorData = {

            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date: Date.now()
        }

        const newDoctor = new doctorModel(doctorData);

        await newDoctor.save();

        res.json({success: true , message: "Doctor added"});        

    } 
    catch (error) 
    {
        console.log(error);

        res.json({success: false , message: error.message});    
    }

}

//==================================================== API for Admin login =================================================

const loginAdmin = async(req , res) => {

    try 
    {


        
    } catch (error) 
    {

        console.log(error);

        res.json({success: false , message: error.message}); 

    }

}

export {addDoctor , loginAdmin}