import mongoose from "mongoose";
import {DB_NAME} from '../constant.js';


const connectDB=async()=>{
    try {
        const connections=await mongoose.connect(`${process.env.MONOGODB_URI}/${DB_NAME}`);
        console.log(`Congratulations 🥹 !! MongoDB is connected at DB host : ${connections.connection.host}`);
        
        
    } catch (error) {
        console.log('MongoDb connection mai dikkat hai bhai connections betha',error);
        process.exit(1);
    }
}

export default connectDB;