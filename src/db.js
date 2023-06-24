import mongoose from "mongoose"




export const connectDb = async () => {
try {
    await mongoose.connect("mongodb+srv://giovany:BX119xrs@cluster0.jctqsjr.mongodb.net/") 
    console.log("db is connected");
} catch (error) {
    console.log(error);
}

}