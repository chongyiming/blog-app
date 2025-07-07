import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://chongyiming1205:Amaci1205!@cluster0.jnoorrg.mongodb.net/blog-app');
    console.log("DB connected");
}