import mongoose from "mongoose"

const connectDb = async () => {
    try {
        
        const connection = await mongoose.connect(process.env.MONGO_URL+"/"+process.env.DATABASE)
        console.log("Database Connected");
        
    } catch (error) {
            console.log("Error in Database ",error.message)
            process.exit(1)
    }
}

export default connectDb