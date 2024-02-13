// lib/dbConnect.js
import mongoose from 'mongoose';


async function dbConnect() {
    // mongoose.connect('mongodb://localhost:27017/buenotechapp',{
    // console.log(process.env.dataBase)
    mongoose.set("strictQuery", false);
    mongoose
        .connect(process.env.NEXT_APP_MONGO_URL)
        .then(() => {
            console.log("mongoose connect successfully");
        })
        .catch((err) => {
            console.log(err);
        });

}

export default dbConnect;
