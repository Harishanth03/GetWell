import mongoose from "mongoose";

const userSchema = new mongoose.Schema(

    {

        name : {type: String , required : true},

        email : {type : String , required : true , unique : true},

        password : {type : String , required : true},

        image : {type : String , default : ""},

        address : {type : Object , required : true},

        gender : {type : String , required : true}

    }

)