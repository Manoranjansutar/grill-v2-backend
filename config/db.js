import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://manoranjansutar:mano1890@cluster0.rdxbyoq.mongodb.net/Grill').then(()=>{
        console.log('DB connected!!!')
    })
}