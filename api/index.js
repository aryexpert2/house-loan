import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("connecté à la base de données MongoDB");
}).catch((e) => {
    console.log(e);
});

const app = express();
app.listen(3000, ()=>{
    console.log('le serveur écoute sur le port 3000!');
})