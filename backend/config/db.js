import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`) //prikazi hosta
    } catch(err) {
        console.log(`Error: ${err.message}`)
        process.exit(1)
    }
}

export default connectDB