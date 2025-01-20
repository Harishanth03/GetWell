import validator from 'validator'
import userModel from '../models/userModel.js';
import bcrypt  from 'bcrypt';
import jwt from 'jsonwebtoken'

const registerUser = async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // Check for empty fields
      if (!email || !name || !password) {
        return res.status(400).json({ success: false, message: "Please fill in all fields" });
      }
  
      // Validate email
      if (!validator.isEmail(email)) {
        return res.status(400).json({ success: false, message: "Please enter a valid email" });
      }
  
      // Check if email already exists
      const existingEmail = await userModel.findOne({ email });
      if (existingEmail) {
        return res.status(409).json({ success: false, message: "Email already in use" });
      }
  
      // Validate password
      if (password.length < 8) {
        return res.status(400).json({ success: false, message: "Password must be at least 8 characters long" });
      }
  
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Save user to database
      const newUser = new userModel({ name, email, password: hashedPassword });
      const user = await newUser.save();
  
      // Generate JWT
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      return res.status(201).json({ success: true, token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: "Server error" });
    }
  };
  

//================================================= User Login ======================================================

const userLogIn = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check for empty fields
      if (!email || !password) {
        return res.status(400).json({ success: false, message: "Please provide email and password" });
      }
  
      // Find user by email
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(404).json({ success: false, message: "User does not exist" });
      }
  
      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ success: false, message: "Invalid credentials" });
      }
  
      // Generate JWT
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      return res.status(200).json({ success: true, token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: "Server error" });
    }
  };
  

export {registerUser , userLogIn}