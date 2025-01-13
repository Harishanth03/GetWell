import doctorModel from "../models/doctorModel.js";

const changeAvailablity = async(req , res) => {

    try 
    {

        const {docId} = req.body;

        const docData = await doctorModel.findById(docId);

        await doctorModel.findByIdAndUpdate(docId , {available: !docData.available}) // is available true its changed as false if available false its changes as true

        res.json({success:true , message:'Availablity Changed'})
        
        
    } catch (error) 
    {

        console.log(error);

        res.json({success: false , message: error.message});    
        
    }

}

export{changeAvailablity}