import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("connecté à la base de données MongoDB");
}).catch((e) => {
    console.log(e);
});

const app = express();
app.use(express.json());

app.listen(3000, ()=>{
    console.log('le serveur écoute sur le port 3000!');
})

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);