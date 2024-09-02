
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";

dotenv.config();
const app = express();

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is runing at ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.error("MongoDB Connection Failed", error)
})







// (async () => {
//   try {
//    await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`);
//   } catch (error) {
//     console.error("ERROR:", error);
//   }
// })();
