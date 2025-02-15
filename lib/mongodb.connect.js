import mongoose from "mongoose";

const connectionToDb = async () => {
    try {
        await mongoose.connect(process.env.MONG0_URI)
        console.log("Mongo connection successful")
    } catch {
        console.log("Connection to MongoDb Failed")
    }
}

export default connectionToDb