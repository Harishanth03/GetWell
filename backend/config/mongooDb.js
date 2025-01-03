import mongoose from 'mongoose';

const connectDatabase = async() => 
{
    
    try 
    {


        mongoose.connection.on('connected', () => console.log('Database connected successfully'));

        await mongoose.connect(`${process.env.MONGODB_URI}/GetWell`);
    } 
    catch (error) 
    {

        console.log('Error is: ' , error);
        
    }
}

export default connectDatabase;